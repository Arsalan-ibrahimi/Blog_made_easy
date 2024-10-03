const session = require('express-session');

const sessionMiddleware = session({
    secret: 'secret-key', // Replace with a strong secret
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set secure to true if using HTTPS
});

module.exports = sessionMiddleware;
