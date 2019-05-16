const { User, Image } = require("../db");
const { upload } = require("../handlers/imageHandler");

const uploadSingle = upload.single("file");

const getImages = async (req, res, next) => {
  try {
    const { images } = await User.findById(req.user._id)
      .populate("images")
      .exec();
    req.images = images;
    next();
  } catch (err) {
    throw new Error("Something went wrong!", err.message);
  }
};

const addImage = async (req, res, next) => {
  try {
    const image = await Image.create({ src: req.file.location });
    await User.findByIdAndUpdate(
      req.user._id,
      { $push: { images: image } },
      { new: true }
    ).exec();
    req.image = image;
    next();
  } catch (err) {
    throw new Error("Something went wrong!", err.message);
  }
};

module.exports = { uploadSingle, addImage, getImages };
