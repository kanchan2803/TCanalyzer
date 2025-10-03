import express from 'express'
import { ensureAuthenticated } from '../middleware/ensureAuthentication.js';
import { getHistory, saveHistory, updateUserProfile } from '../controller/userController.js';
import { validateHistory } from '../middleware/historyValidation.js';

const router = express.Router();

router.put("/profile", ensureAuthenticated , updateUserProfile);

router.get("/history",ensureAuthenticated , getHistory );
router.post("/history",ensureAuthenticated , validateHistory , saveHistory);

export default router;