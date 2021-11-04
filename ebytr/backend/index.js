const express = require('express');
const router = require('./routes/router');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", router);

const PORT = 5000;

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)
});