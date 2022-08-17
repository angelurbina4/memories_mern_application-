import express from 'express';

import * as userControllers from '../controllers/users.js';

const router = express.Router();

//http://localhost:3000/users

router.post('/signin', userControllers.signin);
router.post('/signup', userControllers.signup);

export default router; 

