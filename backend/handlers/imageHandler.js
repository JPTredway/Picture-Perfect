const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

// Configure aws environment
AWS.config.update({
  accessKeyId: process.env.S3_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: "us-east-1"
});

const s3 = new AWS.S3();

const acceptedFileTypes = new Set(["image/jpeg", "image/png", "image/gif"]);
const fileFilter = (req, file, cb) => {
  if (!acceptedFileTypes.has(file.mimetype)) {
    return cb(null, false);
  }

  cb(null, true);
};

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "picture-perfect-photos",
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  }),
  fileFilter: fileFilter
});

module.exports = { upload };
