import { useEffect, useState } from "react";
import axios from 'axios';
import './Pulses.css';

export default function Pulses({ selected }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPulsesData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://18.224.5.169:5000/api/pulses");
        console.log("response", response);
    
        if (response.data.status !== "ok") {
          throw new Error(`Error: ${response.statusText}`);
        }
    
        // Transform the response data into the required format
        const data = response.data.articles.map((article) => ({
          title: article.title,
          source: article.source.name,
          time: new Date(article.publishedAt).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          description: article.description,
          link: article.url,
          thumbnail: article.urlToImage || "https://dummyimage.com/150x100/cccccc/ffffff&text=No+Image",
        }));
    
        setArticles(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    

    fetchPulsesData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts.

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="pulses-container">
      <h2>Today’s Security Updates</h2>
      <table className="feed-table">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Source</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {articles.map((item, index) => (
            <tr key={index} className="feed-row">
              <td>
                <img src={item.thumbnail} alt="Thumbnail" className="thumbnail-img" />
              </td>
              <td>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="feed-title">
                  {item.title}
                </a>
                <p className="feed-time">{item.time} ago</p>
              </td>
              <td className="feed-source">{item.source}</td>
              <td className="feed-description">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}