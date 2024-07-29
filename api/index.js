const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
const port = 3000;

// console.log(process.env.MONGO)
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('DB Connected Successfully!');
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    })
})
.catch((err) => console.log(err));
