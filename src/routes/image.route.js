const ImageRouter = require('express').Router();
const uploadMiddleWare = require('../middleware/upload-file-handler.mid');
const { getImage, uploadImage } = require('../controllers/images.controller');

ImageRouter.get('/:id', getImage);
ImageRouter.post('/upload', uploadMiddleWare.single('my-file'), uploadImage);

module.exports = { ImageRouter };
