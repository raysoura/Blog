const express = require("express");
const app = express();
const postRouter = require('./src/posts');
const db = require("./models");
const cors = require('cors')

app.use(express.json());    
app.use('/post', postRouter);
app.use(cors());

db.sequelize.sync().then(()=> {
    console.log("Db synced");
    app.listen(3000, ()=> {
        console.log("I love Smriti Jaiswal");
        
    });
})


