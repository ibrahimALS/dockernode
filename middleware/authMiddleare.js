
exports.authMiddleware = (req, res, next) => {
    const { user } = req.session;
    if (!user) {
        res.status(401).json({ ok: false, message: "unauthorized" })
    }
    req.user = user;
    next();
}