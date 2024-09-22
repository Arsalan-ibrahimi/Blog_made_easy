const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const { default: mongoose } = require('mongoose');

const dotenv = require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());




//MongoDB Connection using env files
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.useDb('Blogs');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

//MongoDB Connection using env filess

app.post('/addReader', (req, res) => {
    // res.send('Reader Data Received Successfully');
    (async () => {
        try {
            // console.log(req.body);
            let Data = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            }
            const response = await db.db.collection('Users').insertOne(Data);
            console.log(response);
            res.send({data:'Reader Data Received Successfully'});
            
          } catch (error) {
            console.log('Error occurred while inserting');
          }
    })();
  

});





app.listen(8000, () => {
    console.log('Server is running on port 8000');
})