const fs = require('fs');

const deleteFromDisk = (path, fileName) => {
  const dir = fs.readdirSync(path);

  if (!dir.includes(fileName)) {
    console.log('Something was wrong');
    return;
  }

  dir.forEach(file => {
    if (file === fileName) {
      console.log(`deleting file: ${file}`);
      fs.unlink(`${path}/${fileName}`, function (error) {
        if (error) {
          console.warn(error);
          throw error;
        }
        console.log(`${file} file was be delete`);
      });
    }
  });
};

module.exports = deleteFromDisk;
