const express = require('express');
var bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors')
const app = express();
let glovalStorage = [];
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'));
app.use(cors());
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
const upload = multer({ storage: storage});
  
const responseHandlebar = (res,result) =>{
    res.json({
    status : 200,
    message: "success",
    response: result
   })
}

app.get('/groceryList', (req,res)=>{
    responseHandlebar(res,glovalStorage);
})

/**
 * method post
 */
app.post('/addGrocery',upload.single('grocery_image'), (req,res)=>{
    let body = req.body;
    const protocol = req.protocol;
    const host = req.hostname;
    const baseURL = protocol+"://"+host+":"+PORT+"/uploads/";
    if(req.file?.originalname){
        body.fileUrl =baseURL+req.file?.filename;
        body.fileName = req.file?.filename
    }
    
    glovalStorage.push(body)
    responseHandlebar(res,body);
})

app.listen(process.env.PORT || PORT, ()=>console.log(`${process.env.PORT || PORT} is listing`))