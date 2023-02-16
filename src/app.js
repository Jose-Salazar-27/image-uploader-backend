const express = require('express');
const app = express();
const logger = require('./middleware/request-logger.mid');
const ImageRouter = require('./routes/image.route');

require('dotenv').config();

app.use(logger);
app.use('/api', ImageRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is runnig on port: ${port}`);
});
