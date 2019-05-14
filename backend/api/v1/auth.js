const { Router } = require("express");
const { login, isAuthenticated } = require("../../controllers/authController");
const { registerUser } = require("../../controllers/userController");
const router = Router();

router.post("/signup", registerUser, login, (req, res) => {
  res.json(req.user);
});

router.post("/login", login, (req, res) => {
  res.json(req.user);
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  req.logout();
  res.clearCookie("connect.sid", {
    domain: process.env.FRONTEND_URL,
    path: "/"
  });
  res.sendStatus(200);
});

router.get("/user", isAuthenticated, (req, res) => {
  res.json(req.user);
});

module.exports = router;
