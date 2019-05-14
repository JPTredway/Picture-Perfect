const { Router } = require("express");
const auth = require("./auth");
const images = require("./images");

const router = Router();

router.use(auth);
router.use(images);

module.exports = router;
