const { Router } = require("express");
const { uploadImage } = require("../../controllers/imageController");
const { isAuthenticated } = require("../../controllers/authController");

const router = Router();

router.post("/images", isAuthenticated, uploadImage, async (req, res) => {
  res.json(req.body.image);
});

module.exports = router;
