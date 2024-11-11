import express from 'express';
import { signup, login, getUserProfile } from '../controllers/authController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Route to handle user signup
router.post('/signup', signup);

// Route to handle user login
router.post('/login', login);

// Route to get user profile (can be a protected route if you implement authentication middleware)
router.get('/profile', auth, getUserProfile);

export default router;
