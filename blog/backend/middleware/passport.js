/**
 * Passport.js configuration
 *
 * This module configures Passport.js for authentication with a local strategy.
 * It uses a dummy in-memory user database for demonstration purposes.
 *
 * @module passport
 */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Dummy user data (you'd use a database in a real application)
const users = [
    { id: 1, username: 'john', passwordHash: bcrypt.hashSync('password123', 10), name: 'John Doe' }
];

// Configure the Passport Local Strategy
passport.use(new LocalStrategy((username, password, done) => {
    const user = users.find(u => u.username === username);
    if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
    }
    if (!bcrypt.compareSync(password, user.passwordHash)) {
        return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
}));

// Serialize user ID to session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize user ID from session
passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
});

module.exports = passport;

