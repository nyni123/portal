import contributor1 from "../assets/contributor-1.png";
import contributor2 from "../assets/contributor-2.png";
import contributor3 from "../assets/contributor-3.png";
import contributor4 from "../assets/contributor-4.png";

export default function Contributors() {
  return (
    <div className="flex flex-col bg-white p-4 gap-8 items-center rounded-lg shadow-lg w-full max-w-2xl">
      <h1 className="text-lg font-semibold">TOP COMMUNITY CONTRIBUTORS</h1>
      <ul className="flex flex-wrap justify-center gap-4">
        <li>
          <img
            src={contributor1}
            alt="Contributor 1"
            className="w-12 h-12 rounded-full object-cover"
          />
        </li>
        <li>
          <img
            src={contributor2}
            alt="Contributor 2"
            className="w-12 h-12 rounded-full object-cover"
          />
        </li>
        <li>
          <img
            src={contributor3}
            alt="Contributor 3"
            className="w-12 h-12 rounded-full object-cover"
          />
        </li>
        <li>
          <img
            src={contributor4}
            alt="Contributor 4"
            className="w-12 h-12 rounded-full object-cover"
          />
        </li>
      </ul>
    </div>
  );
}
