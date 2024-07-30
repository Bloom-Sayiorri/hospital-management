const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
const port = 3000;

//Connection of Database.
async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO)
        .then(() => {
            console.log('DB Connected Successfully!');
            // app.listen(port, () => {
            //     console.log(`Server running on port: ${port}`);
            // });
        })
    } catch(err) {
        console.log(err);
    }
};
connectDb();

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello Node Server')
});