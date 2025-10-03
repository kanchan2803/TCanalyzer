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