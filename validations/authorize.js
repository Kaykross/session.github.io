const authorize = (req, res, next) =>{
    if (!req.session.user) return res.redirect("/login");
    else return next();
};

module.exports = authorize;