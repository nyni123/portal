const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const cors = require('cors');
const app = express();

const client = new OAuth2Client('YOUR_GOOGLE_CLIENT_ID'); // Replace with your Google Client ID

app.use(cors());
app.use(express.json());

app.post('/api/auth/google', async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: 'YOUR_GOOGLE_CLIENT_ID',  // Specify your Google Client ID
    });
    const payload = ticket.getPayload();

    // Here you can use the `payload` data for user authentication
    console.log(payload);

    // Create a session or return a JWT token, depending on your needs
    res.status(200).json({ message: 'Google login successful', user: payload });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(400).json({ message: 'Google login failed' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
