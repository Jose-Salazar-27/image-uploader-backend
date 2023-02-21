const ImageModel = require('../models/image.model');
const { cloudinaryUpload } = require('../utilities/cloudinary-upload.utilitie');

const getImage = ImageId => {
  return ImageModel.findById(ImageId);
};

const uploadImage = filePath => {
  return cloudinaryUpload(filePath);
};

const saveImageInfo = document => {
  return ImageModel.create(document);
};

module.exports = { getImage, uploadImage, saveImageInfo };
