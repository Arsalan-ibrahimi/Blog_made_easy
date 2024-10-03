const express = require('express');
const passport = require('../middlewares/passport');
const isAuthenticated = require('../middlewares/auth');

const router = express.Router();

// Login route
router.get('/login', (req, res) => {
    res.send('<form method="post" action="/login"><input type="text" name="username" placeholder="Username"/><input type="password" name="password" placeholder="Password"/><button type="submit">Login</button></form>');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
}));

// Dashboard (protected route)
router.get('/dashboard', isAuthenticated, (req, res) => {
    res.send(`Hello, ${req.user.name}. Welcome to your dashboard!`);
});

// Logout route
router.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect('/');
    });
});

module.exports = router;
