const User = require('../models/User');

const registerUser = async (req, res) => {
    try {
        const { name, age, county, educationLevel } = req.body;
        const user = await User.create({ name, age, county, educationLevel });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser };
