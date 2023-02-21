const { cloudinary } = require('../config/cloudinaryConfig');

const cloudinaryUpload = async filePath => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: false,
    folder: 'image-uploader',
  };

  try {
    const result = await cloudinary.uploader.upload(filePath, options);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { cloudinaryUpload };
