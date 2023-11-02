const User = require('../models/UserPreference'); // Import the User model

exports.updateColorPreference = async (req, res) => {
    let { username } = req.params;
    const { colorPreference } = req.body;

    username = username.toLowerCase().trim();
    try {
        const user = await User.findOneAndUpdate(
            { username },
            { colorPreference },
            { new: true }
        );

        if (user) {
            res.status(200).json({ message: 'Color preference updated', user });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating color preference:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
