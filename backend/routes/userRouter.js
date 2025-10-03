import express from 'express'
import { ensureAuthenticated } from '../middleware/ensureAuthentication.js';
import { updateUserProfile } from '../controller/userController.js';

const router = express.Router();

router.put("/profile", ensureAuthenticated , updateUserProfile);

router.get("/history",ensureAuthenticated );

export default router;