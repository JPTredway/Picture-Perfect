const cloudinary = require("cloudinary").v2;

const uploadImage = async (req, res, next) => {
  try {
    const image = await cloudinary.uploader.upload(req.file);
    req.body.image = image;
    next();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { uploadImage };
