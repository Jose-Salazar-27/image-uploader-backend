require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const loggerMiddleware = require('./middleware/request-logger.mid');
const { ImageRouter } = require('./routes/image.route');
const ErrorHandlerMiddleware = require('./middleware/error-handler-mid');
const { connectDB } = require('./config/connectDB');
const { cloudinaryConfig } = require('./config/cloudinaryConfig');

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use(ErrorHandlerMiddleware);

app.use('/api', ImageRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is runnig on port: ${port}`);
});

connectDB();
cloudinaryConfig();
