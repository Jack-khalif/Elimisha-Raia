const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const auth = require('../../middleware/auth');


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.post('/guest-register', async (req, res) => {
    try {
        const guestUser = new User({
            username: 'Guest',
            email: `guest_${Date.now()}@example.com`,
            isGuest: true,
            password: 'guest_temp_password',
        });
        await guestUser.save();
        const token = guestUser.generateAuthToken();
        res.status(201).json({ token, user: guestUser });
    } catch (error) {
        console.error('Guest registration error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/test', (req, res) => res.json({ msg: 'Users route works' }));

module.exports = router;
