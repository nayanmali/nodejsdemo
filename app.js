const express = require('express')
const app = express();
const adminData = require('./routes/admin');
const shopRouters = require('./routes/shop');

app.set('view engine','ejs');
app.set('views','views');
app.use(shopRouters);
app.use("/admin",adminData.router);
app.listen(4001);