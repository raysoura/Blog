const express = require("express");
const {Posts} = require("../models");
const router = express.Router();


router.get('/', async(req, res)=> {
    const postList = await Posts.findAll();
    res.json(postList);
});

router.post('/', async(req, res) => {

    const postData = req.body;
    console.log(postData);
    await Posts.create(postData);
    return res.json(postData);
});

module.exports = router;