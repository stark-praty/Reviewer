const express = require('express');
const r = express.Router();
const csv = require('csv-parser')
const fs = require('fs')
const phone = [],reviews = [];
const samsung = [],lenovo = [],lg = [],micromax = [],nokia = [],htc = [],motorola = [];
const zte = [],huawei = [],google = [],asus = [],acer = [],blackberry = [],infinix = [];
const apple = [],oneplus = [],oppo = [],panasonic = [],sony = [],vivo = [],xiaomi = [];
const samsung1 = [],lenovo1 = [],lg1 = [],micromax1 = [],nokia1 = [],htc1 = [],motorola1 = [];
const zte1 = [],huawei1 = [],google1 = [],asus1 = [],acer1 = [],blackberry1 = [],infinix1 = [];
const apple1 = [],oneplus1 = [],oppo1 = [],panasonic1 = [],sony1 = [],vivo1 = [],xiaomi1 = [];

fs.createReadStream('./public/data/phones.csv')
.pipe(csv({}))
.on('data',(data) => phone.push(data))
.on('end',() =>{
  for(i of phone){
    if(i.company == 'Acer'){ acer.push(i); }
    else if(i.company == 'Apple'){apple.push(i); }
    else if(i.company == 'Asus'){ asus.push(i); }
    else if(i.company == 'BlackBerry'){ blackberry.push(i); }
    else if(i.company == 'Google'){ google.push(i); }
    else if(i.company == 'HTC'){ htc.push(i); }
    else if(i.company == 'Huawei'){ huawei.push(i); }
    else if(i.company == 'Infinix'){ infinix.push(i); }
    else if(i.company == 'Lenovo'){ lenovo.push(i); }
    else if(i.company == 'LG'){ lg.push(i); }
    else if(i.company == 'Micromax'){ micromax.push(i); }
    else if(i.company == 'Motorola'){ motorola.push(i); }
    else if(i.company == 'Nokia'){ nokia.push(i); }
    else if(i.company == 'OnePlus'){ oneplus.push(i); }
    else if(i.company == 'Oppo'){ oppo.push(i); }
    else if(i.company == 'Panasonic'){ panasonic.push(i); }
    else if(i.company == 'Samsung'){ samsung.push(i); }
    else if(i.company == 'Sony'){ sony.push(i); }
    else if(i.company == 'Vivo'){ vivo.push(i); }
    else if(i.company == 'Xiaomi'){ xiaomi.push(i); }
    else if(i.company == 'ZTE'){ zte.push(i); }
  }
});
fs.createReadStream('./public/data/ratings_on_reviews.csv')
.pipe(csv({}))
.on('data',(data) => phone.push(data))
.on('end',() =>{
  for(i of phone){
    if(i.Brand_x == 'Acer'){ acer1.push(i); }
    else if(i.Brand_x == 'Apple'){apple1.push(i); }
    else if(i.Brand_x == 'Asus'){ asus1.push(i); }
    else if(i.Brand_x == 'BlackBerry'){ blackberry1.push(i); }
    else if(i.Brand_x == 'Google'){ google1.push(i); }
    else if(i.Brand_x == 'HTC'){ htc1.push(i); }
    else if(i.Brand_x == 'Huawei'){ huawei1.push(i); }
    else if(i.Brand_x == 'Infinix'){ infinix1.push(i); }
    else if(i.Brand_x == 'Lenovo'){ lenovo1.push(i); }
    else if(i.Brand_x == 'LG'){ lg1.push(i); }
    else if(i.Brand_x == 'Micromax'){ micromax1.push(i); }
    else if(i.Brand_x == 'Motorola'){ motorola1.push(i); }
    else if(i.Brand_x == 'Nokia'){ nokia1.push(i); }
    else if(i.Brand_x == 'OnePlus'){ oneplus1.push(i); }
    else if(i.Brand_x == 'Oppo'){ oppo1.push(i); }
    else if(i.Brand_x == 'Panasonic'){ panasonic1.push(i); }
    else if(i.Brand_x == 'Samsung'){ samsung1.push(i); }
    else if(i.Brand_x == 'Sony'){ sony1.push(i); }
    else if(i.Brand_x == 'Vivo'){ vivo1.push(i); }
    else if(i.Brand_x == 'Xiaomi'){ xiaomi1.push(i); }
    else if(i.Brand_x == 'ZTE'){ zte1.push(i); }
  }
});
fs.createReadStream('./public/data/review.csv')
.pipe(csv({}))
.on('data',(data) => reviews.push(data))
.on('end',() =>{
});

r.get('/samsung/device',(req,res,next)=>{
  res.render('product-p',{
    val: samsung,
    value: reviews,
    valu: samsung1,
    name: req.query.name
  });
});
r.use('/lenovo/device',(req,res,next)=>{
  res.render('product-p',{
    val: lenovo,
    value: reviews,
    valu: lenovo1,
    name: req.query.name
  });
});
r.use('/lg/device',(req,res,next)=>{
  res.render('product-p',{
    val: lg,
    value: reviews,
    valu: lg1,
    name: req.query.name
  });
});
r.use('/micromax/device',(req,res,next)=>{
  res.render('product-p',{
    val: micromax,
    value: reviews,
    valu: micromax1,
    name: req.query.name
  });
});
r.use('/motorola/device',(req,res,next)=>{
  res.render('product-p',{
    val: motorola,
    value: reviews,
    valu: motorola1,
    name: req.query.name
  });
});
r.use('/nokia/device',(req,res,next)=>{
  res.render('product-p',{
    val: nokia,
    value: reviews,
    valu: nokia1,
    name: req.query.name
  });
});
r.use('/htc/device',(req,res,next)=>{
  res.render('product-p',{
    val: htc,
    value: reviews,
    valu: htc1,
    name: req.query.name
  });
});
r.use('/zte/device',(req,res,next)=>{
  res.render('product-p',{
    val: zte,
    value: reviews,
    valu: zte1,
    name: req.query.name
  });
});
r.use('/huawei/device',(req,res,next)=>{
  res.render('product-p',{
    val: huawei,
    value: reviews,
    valu: huawei1,
    name: req.query.name
  });
});
r.use('/google/device',(req,res,next)=>{
  res.render('product-p',{
    val: google,
    value: reviews,
    valu: google1,
    name: req.query.name
  });
});
r.get('/asus/device',(req,res,next)=>{
  res.render('product-p',{
    val: asus,
    value: reviews,
    valu: asus1,
    name: req.query.name
  });
});
r.use('/acer/device',(req,res,next)=>{
  res.render('product-p',{
    val: acer,
    value: reviews,
    valu: acer1,
    name: req.query.name
  });
});
r.use('/blackberry/device',(req,res,next)=>{
  res.render('product-p',{
    val: blackberry,
    value: reviews,
    valu: blackberry1,
    name: req.query.name
  });
});
r.use('/infinix/device',(req,res,next)=>{
  res.render('product-p',{
    val: infinix,
    value: reviews,
    valu: infinix1,
    name: req.query.name
  });
});
r.use('/apple/device',(req,res,next)=>{
  res.render('product-p',{
    val: apple,
    value: reviews,
    valu: apple1,
    name: req.query.name
  });
});
r.use('/oneplus/device',(req,res,next)=>{
  res.render('product-p',{
    val: oneplus,
    value: reviews,
    valu: oneplus1,
    name: req.query.name
  });
});
r.use('/oppo/device',(req,res,next)=>{
  res.render('product-p',{
    val: oppo,
    value: reviews,
    valu: oppo1,
    name: req.query.name
  });
});
r.use('/panasonic/device',(req,res,next)=>{
  res.render('product-p',{
    val: panasonic,
    value: reviews,
    valu: panasonic1,
    name: req.query.name
  });
});
r.use('/sony/device',(req,res,next)=>{
  res.render('product-p',{
    val: sony,
    value: reviews,
    valu: sony1,
    name: req.query.name
  });
});
r.use('/vivo/device',(req,res,next)=>{
  res.render('product-p',{
    val: vivo,
    value: reviews,
    valu: vivo1,
    name: req.query.name
  });
});
r.use('/xiaomi/device',(req,res,next)=>{
  res.render('product-p',{
    val: xiaomi,
    value: reviews,
    valu: xiaomi1,
    name: req.query.name
  });
});

module.exports = r;