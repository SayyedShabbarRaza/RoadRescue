import express from 'express';
import registerMechanic from '../controllers/mechanic/mechanic_register.js'

const router=express.Router();
router.post('/register',registerMechanic);

export default router;