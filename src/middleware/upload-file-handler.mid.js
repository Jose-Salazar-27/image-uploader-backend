const multer = require('multer');

const storagePath = `${__dirname}/../../storage`;

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, storagePath);
  },
  filename: function (request, file, callback) {
    const extension = file.originalname.split('.').pop();
    callback(null, `file-${Date.now()}.${extension}`);
  },
});

const uploadMiddleWare = multer({ storage });

module.exports = uploadMiddleWare;
