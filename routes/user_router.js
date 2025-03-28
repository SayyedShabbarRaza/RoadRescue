import express from 'express';
import registerUser from '../controllers/user/user_register.js'
import upload from '../config/multer-config.js';

const router=express.Router();
router.post('/register',upload.single('file'),registerUser);

export default router;