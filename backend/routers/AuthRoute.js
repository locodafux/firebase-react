import express from 'express';
import { login } from '../controllers/AuthController.js';
const router = express.Router();

//Roles 
router.post('/login',login);


export default router;