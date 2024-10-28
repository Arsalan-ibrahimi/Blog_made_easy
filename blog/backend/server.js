const express = require('express');;
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const e = require('express');
const User = require('./models/readers');
const BlogContent = require('./models/blogcontent');
const {v4: uuidv4} = require('uuid')
const multer = require('multer');



const ObjectId = require('mongodb').ObjectId
const dashboard = require('./routes/dashboard');

const dotenv = require('dotenv').config();
const app = express();

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included 
};

app.use(cors(corsOptions));
app.use(express.json());
//for backend to froend accessibilit see below
app.use('/uploads', express.static('uploads'));
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

//multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/profiles');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

app.post('/uploadProfile', upload.single('file'), async (req, res) => {
  try {

    let objId = new ObjectId(req.body.id.toString());
    const response = await db.db.collection('Users').updateOne({'_id': objId}, {$set: {profile: req.file.originalname}});
    console.log(response);
    res.send({ upload: true });
  } catch (error) {
    console.log('Error occurred while inserting', error);
    res.send({ upload: false });
  }
});

//multer



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
                    // console.log(session_id);
                    res.cookie('uid', session_id);
                    res.send(
                      {
                        name: response[0].name,
                        password: true,
                        profile: response[0].profile,
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
              timestamp: Date.now(),
            });

            const response = await db.db.collection('BlogContent').insertOne(newBlog);
            console.log(response);

            
          } catch (error) {
            console.log('Error occurred while inserting');
          }
    })();
  });

  app.post ('updateBlog', (req, res) => {
    async () => {
        try {
            const response = await db.db.collection('BlogContent').updateOne({'_id': req.body.id}, {$set: {title: req.body.title, content: req.body.content}});
            console.log(response);
            res.send({data:'Blog Data updated Successfully'});
            
          } catch (error) {
            console.log('Error occurred updating inserting', error);
          }
    }

  })

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