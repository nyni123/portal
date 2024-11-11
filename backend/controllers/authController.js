import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// User signup
export const signup = async (req, res) => {
    const { firstName, lastName, email,companyName, password } = req.body;
  
    try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      // Create a new user
      user = new User({
        firstName,
        lastName,
        email,
        companyName,
        password
      });
  
      // Save the user, which will automatically set fullName in the pre-save middleware
      await user.save();
  
      // Create and return JWT token (optional)
      const token = jwt.sign({ userId: user.id }, 'yourSecretKey', { expiresIn: '1h' });
  
      res.json({ token, msg: 'User created successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

// User login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'No User Found!' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create and return JWT token
    const token = jwt.sign({ userId: user.id }, 'yourSecretKey', { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    // Assuming you have user authentication implemented, you can use req.userId
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
