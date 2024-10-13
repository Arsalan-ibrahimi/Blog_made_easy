const express = require('express');;
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const e = require('express');
const User = require('./models/readers');
const BlogContent = require('./models/blogcontent');
const {v4: uuidv4} = require('uuid')

const ObjectId = require('mongodb').ObjectId
const dashboard = require('./routes/dashboard');

const dotenv = require('dotenv').config();
const app = express();

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));





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
            // console.log(response);
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
                        password: true,
                        _id: response[0]._id
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


  app.post('/newBlog', (req, res) => {
    (async () => {
        try {
            // const response = await db.db.collection('Blogs').insertOne(req.body);
            // console.log(response);
            res.send({data:'Blog Data Received Successfully'});

            const newBlog = new BlogContent({
              title: req.body.title,
              content: req.body.content,
              author: req.body.author,
              
            });

            const response = await db.db.collection('BlogContent').insertOne(newBlog);
            console.log(response);

            
          } catch (error) {
            console.log('Error occurred while inserting');
          }
    })();
  });


  app.get('/getBlogs', (req, res) => {
    (async () => {
        try {
            const response = await db.db.collection('BlogContent').find({}).toArray();
            console.log(response);
            res.send(response);
          } catch (error) {
            console.log('Error occurred while inserting', error);
          }
    })();
  });

  app.post('/getReader', (req, res) => {
    (async () => {
        try {
          
          if(req.body.id)
          {
          console.log('called: id: ',req.body.id);  
          let objId = new ObjectId(req.body.id.toString());
            const response = await db.db.collection('Users').find({"_id": objId}).toArray();
            const Blogs = await db.db.collection('BlogContent').find({"author": req.body.id}).toArray();
           
           res.send({response: response, Blogs: Blogs});
          }
          else
          {
            res.send({data:'Not logged in'});
    
          }
     
          } catch (error) {
            console.log('Error occurred while inserting', error);
          }
    })();
  });




app.listen(8000, () => {
    console.log('Server is running on port 8000');
})