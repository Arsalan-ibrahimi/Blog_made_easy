const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const e = require('express');

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
                phone: req.body.phone,
                password: req.body.password,
                user: req.body.user
            }

            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            Data.password = hashedPassword

            const response = await db.db.collection('Users').insertOne(Data);
            console.log(response);
            res.send({data:'Reader Data Received Successfully'});
            
          } catch (error) {
            console.log('Error occurred while inserting');
          }
    })();
  

});


app.post ('/loginReader', (req, res) => {
    (async () => {
        try {
        
            let Data = {
                email: req.body.email,
                password: req.body.password
            }
            console.log(Data);
            const response = await db.db.collection('Users').find({email:Data.email}).toArray();
            console.log(response);
            res.send({data:'Reader Data Received Successfully'});

            // let hashedPassword = await bcrypt.compare(req.body.password, Data.password);
            if(response.length > 0)
              {
                console.log("user exits");
                let hashedPassword = await bcrypt.compare(req.body.password, response[0].password);
                if(hashedPassword)
                {
                  console.log("password matched");
                }
                else
                {
                  console.log("password not matched");
                }
              }
              else 
              {
                console.log("user not exits");
              }

            
          } catch (error) {
            console.log('Error occurred');
          }
    })();
  
  })





app.listen(8000, () => {
    console.log('Server is running on port 8000');
})