const express = require('express')
const router = express.Router()
const adminData = require('./admin')

router.get('/products',(req,res)=>{
   const product = adminData.products;
   
   res.render('shop.pug' , {data : product});
   //res.send(adminData.products);
   //res.send('<h1>Hello World.</h1>');
});

module.exports = router;