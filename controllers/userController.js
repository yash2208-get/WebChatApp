const { check, validationResult } = require('express-validator');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const path = require('path');

exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render('register', { errors: errors.array() });
    }

    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const imagePath = req.file.path;

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            image: imagePath,
        });

        await newUser.save();
        res.status(200).send('Registration successful');
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.showRegisterForm = (req, res) => {
    res.render('register', { errors: [] });
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user && await bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.redirect('/dashboard'); // Redirect to dashboard after login
    } else {
        res.redirect('/'); // Redirect to login on failure
    }
};

exports.showLoginForm = (req, res) => {
    res.render('login', { errors: [] }); // Render your login form view
};

exports.logoutUser = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/dashboard'); // Handle error and redirect to dashboard
        }
        res.clearCookie('connect.sid');
        res.redirect('/'); // Redirect to login after logout
    });
};
exports.validateRegister = [
    check('username').notEmpty().withMessage('Username is required').trim().escape(),
    check('email').isEmail().withMessage('Invalid email').normalizeEmail().custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) {
            throw new Error('Email already in use');
        } else {
            return true;
        }
    }),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').trim().escape(),
];


exports.validateLogin = [
    // Add your validation logic here
    check('email').isEmail().withMessage('Invalid email').normalizeEmail(),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').trim().escape(),
]

exports.showDashboard = (req, res) => {
    res.render('dashboard', { user: req.session.user }); // Render your login form view
};