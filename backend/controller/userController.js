import History from "../models/History.js";
import User from "../models/User.js"


export const updateUserProfile = async (req,res) =>{
    try {
        const userId = await req.user._id;      //from ensureAuthenticated middle req
        const user = await User.findById(userId);

        if (user) {
            user.name = req.body.name || user.name;
            user.leetcodeId = req.body.leetcodeId || user.leetcodeId;
            user.codeforcesId = req.body.codeforcesId || user.codeforcesId;

            const updatedUser = await user.save();

            // Return the updated user object (without the password)
            res.status(200).json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                leetcodeId: updatedUser.leetcodeId,
                codeforcesId: updatedUser.codeforcesId,
            });

        } else {
            res.status(404).json({ message: 'User not found' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

// @desc    Get all history for the logged-in user
// @route   GET /api/history
// @access  Private
export const getHistory = async (req,res) =>{
    try {
        const userId = req.user._id;
        const history  = await History.find({ userId }).sort({ createdAt: -1 });
        res.status(200)
            .json(history);
    } catch (error) {
        res.status(500).json({ message: 'Server error fetching history.' });
    }

}

// @desc    Save a new analysis to the user's history
// @route   POST /api/history
// @access  Private
export const saveHistory = async (req,res)=>{
    try {
        const { code, language, timeComplexity, spaceComplexity, reasoning } = req.body;
        
        const newHistoryItem = new History({
            userId: req.user._id,
            code,
            language,
            timeComplexity,
            spaceComplexity,
            reasoning,
        });

        await newHistoryItem.save();
        res.status(200).json(newHistoryItem);

    } catch (error) {
        res.status(500).json({ message: 'Server error saving history.' });
    }
}