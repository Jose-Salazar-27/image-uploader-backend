const imageService = require('../services/images.service');
const deleteFromDisk = require('../utilities/delete-from-disk.utilitie');

const getImage = async (request, response, next) => {
  try {
    const { id } = request.params;
    const image = await imageService.getImage(id);
    response.send({ payload: image });
  } catch (error) {
    response.status(400).send({ error });
    next(error);
  }
};

const uploadImage = async (request, response) => {
  const { path, destination, filename } = request.file;

  try {
    const uploadResult = await imageService.uploadImage(path);
    const { secure_url } = uploadResult;

    const newDocument = {
      author: 'default author',
      url: secure_url,
    };

    const query = await imageService.saveImageInfo(newDocument);
    response.send({ payload: query });
    deleteFromDisk(destination, filename);
  } catch (error) {
    console.log(error);
    response.status(400).send({ error });
  }
};

module.exports = { getImage, uploadImage };
