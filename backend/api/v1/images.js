const { Router } = require("express");
const ic = require("../../controllers/imageController");
const { isAuthenticated } = require("../../controllers/authController");

const router = Router();

router.get("/images", isAuthenticated, ic.getImages, (req, res) => {
  res.json(req.images);
});

router.post(
  "/images",
  isAuthenticated,
  ic.uploadSingle,
  ic.addImage,
  (req, res) => {
    res.json({ message: "Upload successful!" });
  }
);

module.exports = router;
