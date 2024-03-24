const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findByUsername } = require('../models/UserModel.js');

const SECRET_KEY = 'your_secret_key_here';

const authenticate = async (username, password) => {
    const user = findByUsername(username);
    if (user) {
        // Compare encrypted passwords
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            // Generate token if password matches
            const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
            return { success: true, token };
        }
    }
    return { success: false, message: 'Login information is incorrect.' };
};

module.exports = { authenticate };
