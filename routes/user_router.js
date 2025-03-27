import express from 'express';
import registerUser from '../controllers/user/user_register.js'

const router=express.Router();
router.post('/register',registerUser);

export default router;