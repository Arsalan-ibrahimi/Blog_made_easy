const express = require('express');;
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const e = require('express');
const User = require('./models/readers');
const {v4: uuidv4} = require('uuid')

const dotenv = require('dotenv').config();
const app = express();

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
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
            
          
          const newUser = new User({
            name: req.body.name,
            user: req.body.user,
            password: req.body.password,
            email: req.body.email,
            phone:  req.body.phone
          });
          
          let hashedPassword = await bcrypt.hash(req.body.password, 10);
          newUser.password = hashedPassword;

            const response = await db.db.collection('Users').insertOne(newUser);
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
            

            if(response.length > 0)
              {
                console.log("user exits");
                
                let hashedPassword = await bcrypt.compare(req.body.password, response[0].password);
                if(!hashedPassword)
                  {
                    res.send(
                      {
                        name: 'Unknown',
                        password: false
                      }
                    )
                    return
                  }
                  else
                  {
                    const session_id = uuidv4();
                    console.log(session_id);
                    res.cookie('uid', session_id);
                    res.send(
                      {
                        name: response[0].name,
                        password: true
                      }
                    )

                  }

           

               
              }
              else 
              {
                console.log("user not exits");

                res.send(
                  {
                    name: 'Unknown',
                    password: false
                  }
                )

              }
          } catch (error) {
            console.log('Error occurred',   error);
          }
    })();
  
  })





app.listen(8000, () => {
    console.log('Server is running on port 8000');
})