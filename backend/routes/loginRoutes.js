import express from 'express';

import { LoginApi } from '../controllers/loginController.js'; // Make sure this path is correct

const router = express.Router(); // Use express Router

router.get('/login', LoginApi); // Define the route and associate it with the controller function

export default router;// Export the router




// router.get('/auth/google', (req, res) => {
//     console.log('Auth Google route hit');
//     res.send('Google Login Initiated');
// });
