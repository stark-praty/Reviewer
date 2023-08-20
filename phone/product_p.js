const express = require('express');
const r = express.Router();
const csv = require('csv-parser')
const fs = require('fs')
const phone = [];
const samsung = [],lenovo = [],lg = [],micromax = [],nokia = [],htc = [],motorola = [];
const zte = [],huawei = [],google = [],asus = [],acer = [],blackberry = [],infinix = [];
const apple = [],oneplus = [],oppo = [],panasonic = [],sony = [],vivo = [],xiaomi = [];

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

r.use('/samsung',(req,res,next)=>{
  res.render('products',{
    val: samsung,
    page: req.query.page
  });
});
r.use('/lenovo',(req,res,next)=>{
  res.render('products',{
    val: lenovo,
    page: req.query.page
  });
});
r.use('/lg',(req,res,next)=>{
  res.render('products',{
    val: lg,
    page: req.query.page
  });
});
r.use('/micromax',(req,res,next)=>{
  res.render('products',{
    val: micromax,
    page: req.query.page
  });
});
r.use('/motorola',(req,res,next)=>{
  res.render('products',{
    val: motorola,
    page: req.query.page
  });
});
r.use('/nokia',(req,res,next)=>{
  res.render('products',{
    val: nokia,
    page: req.query.page
  });
});
r.use('/htc',(req,res,next)=>{
  res.render('products',{
    val: htc,
    page: req.query.page
  });
});
r.use('/zte',(req,res,next)=>{
  res.render('products',{
    val: zte,
    page: req.query.page
  });
});
r.use('/huawei',(req,res,next)=>{
  res.render('products',{
    val: huawei,
    page: req.query.page
  });
});
r.use('/google',(req,res,next)=>{
  res.render('products',{
    val: google,
    page: req.query.page
  });
});
r.get('/asus',(req,res,next)=>{
  res.render('products',{
    val: asus,
    page: req.query.page
  });
});
r.use('/acer',(req,res,next)=>{
  res.render('products',{
    val: acer,
    page: req.query.page
  });
});
r.use('/blackberry',(req,res,next)=>{
  res.render('products',{
    val: blackberry,
    page: req.query.page
  });
});
r.use('/infinix',(req,res,next)=>{
  res.render('products',{
    val: infinix,
    page: req.query.page
  });
});
r.use('/apple',(req,res,next)=>{
  res.render('products',{
    val: apple,
    page: req.query.page
  });
});
r.use('/oneplus',(req,res,next)=>{
  res.render('products',{
    val: oneplus,
    page: req.query.page
  });
});
r.use('/oppo',(req,res,next)=>{
  res.render('products',{
    val: oppo,
    page: req.query.page
  });
});
r.use('/panasonic',(req,res,next)=>{
  res.render('products',{
    val: panasonic,
    page: req.query.page
  });
});
r.use('/sony',(req,res,next)=>{
  res.render('products',{
    val: sony,
    page: req.query.page
  });
});
r.use('/vivo',(req,res,next)=>{
  res.render('products',{
    val: vivo,
    page: req.query.page
  });
});
r.use('/xiaomi',(req,res,next)=>{
  res.render('products',{
    val: xiaomi,
    page: req.query.page
  });
});

module.exports = r;