const User = require('../models/User.model');

exports.login = (req, res) => {
    // Implement login logic using the User model
    // For example:
    const { username, password } = req.body;
    User.findOne({ username, password }, (err, user) => {
        if (err) {
            res.status(500).send({ message: 'Internal server error' });
        } else if (!user) {
            res.status(401).send({ message: 'Invalid credentials' });
        } else {
            // Perform any additional logic here
            res.send({ message: 'Login successful' });
        }
    });
};

exports.logout = (req, res) => {
    // Implement logout logic using the User model
    // For example:
    // Clear any session data or perform any other necessary tasks
    res.send({ message: 'Logout successful' });
};

exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.massage });
    }
};
