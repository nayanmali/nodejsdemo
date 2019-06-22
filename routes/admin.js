const express = require('express')
const bodyparser = require('body-parser');
const path = require('path');
const router = express.Router();
const products = [];

router.use(bodyparser.urlencoded({extend:true}));

router.use("/addProducts",(req,res,next)=>{    
    console.log('in add products');
    res.sendFile(path.join(__dirname,'../','views','product.html'));
});

router.post('/addProductProcess',(req,res)=>{
    console.log(req.body);
    products.push({firstname:req.body.firstname});
    res.redirect("/products");
});

exports.products = products;
exports.router = router;