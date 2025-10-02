import express from 'express';
import { login, signup } from '../controller/authController.js';
import { validateLogin, validateSignUp } from '../middleware/authValidation.js';


const router = express.Router();

router.post("/signup",validateSignUp, signup);

router.post("/login",validateLogin, login);

export default router;