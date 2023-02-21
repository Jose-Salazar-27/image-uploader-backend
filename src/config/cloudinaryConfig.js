const cloudinary = require('cloudinary').v2;

function cloudinaryConfig() {
  cloudinary.config({
    cloud_name: 'dby2lcaam',
    api_key: 856279596319247,
    api_secret: 'Sq2Jx5e5CXGxKpVhP-6qfF9iMnY',
  });
  // console.log(cloudinary.config());
}

module.exports = { cloudinaryConfig, cloudinary };
