import express from 'express'
import User from "../models/User.js";
import { ensureAuthenticated } from '../middleware/ensureAuthentication.js';

const router = express.Router();

router.get(":/id", async(req,res)=>{
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({error:"Server error"});
    }
})

// Update user profile
router.put("/:id", async (req, res) => {
  try {
    const { name, leetcodeId, codeforcesId } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { name, leetcodeId, codeforcesId } },
      { new: true }
    ).select("-password");
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

router.get("/history/:/id",ensureAuthenticated , async(req,res)=>{
  try {
    //fetch history
  } catch (error) {
    
  }
})

export default router;