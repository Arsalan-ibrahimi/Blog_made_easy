async function RestrictToLoginReaders(req, res, next) {
    if (req.cookie.uid) {
        next();
    } else {
        res.redirect("/login");
    }
}

module.exports = {RestrictToLoginReaders};