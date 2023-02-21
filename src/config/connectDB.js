const mongoose = require('mongoose');
const URL = process.env.MONGODB_URI;

function connectDB() {
  mongoose.connect(
    URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    function (error) {
      if (error) {
        console.log('Connection was failed');
        console.log(error);
      }
      console.log('Connection succesfulled');
    }
  );
}

module.exports = { connectDB };
