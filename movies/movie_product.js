const express = require('express');
const r = express.Router();
const csv = require('csv-parser')
const fs = require('fs')
const m = [];
const m_2011 = [],m_2012 = [],m_2013 = [],m_2014 = [],m_2015 = [],m_2016 = [],m_2017 = [],m_2018 = [],m_2019 = [],m_2020 = [];
const ts_2011 = [],ts_2012 = [],ts_2013 = [],ts_2014 = [],ts_2015 = [],ts_2016 = [],ts_2017 = [],ts_2018 = [],ts_2019 = [],ts_2020 = [];

fs.createReadStream('./public/data/movies_details.csv')
.pipe(csv({}))
.on('data',(data) => m.push(data))
.on('end',() =>{
  for(let j of m){
    if(j.tit_type == 'movie'){ m_2020.push(j); }
    else if(j.tit_type == 'tvSeries' || j.tit_type == 'tvMiniSeries'){ ts_2020.push(j); }
  }
});

r.use('/movies/2020/title',(req,res,next)=>{
  res.render('product-m',{
    val: m_2020,
    name: req.query.name
  });
});
r.use('/movies/2019/title',(req,res,next)=>{
  res.render('product-m',{
    val: m_2019,
    name: req.query.name
  });
});
r.use('/movies/2018/title',(req,res,next)=>{
  res.render('product-m',{
    val: m_2018,
    name: req.query.name
  });
});
r.use('/movies/2017/title',(req,res,next)=>{
  res.render('product-m',{
    val: m_2017,
    name: req.query.name
  });
});
r.use('/movies/2016/title',(req,res,next)=>{
  res.render('product-m',{
    val: m_2016,
    name: req.query.name
  });
});
r.use('/movies/2015/title',(req,res,next)=>{
  res.render('product-m',{
    val: m_2015,
    name: req.query.name
  });
});
r.use('/movies/2014/title',(req,res,next)=>{
  res.render('product-m',{
    val: m_2014,
    name: req.query.name
  });
});
r.use('/movies/2013/title',(req,res,next)=>{
  res.render('product-m',{
    val: m_2013,
    name: req.query.name
  });
});
r.use('/movies/2012/title',(req,res,next)=>{
  res.render('product-m',{
    val: m_2012,
    name: req.query.name
  });
});
r.use('/movies/2011/title',(req,res,next)=>{
  res.render('product-m',{
    val: m_2011,
    name: req.query.name
  });
});
r.use('/tv_series/2020/title',(req,res,next)=>{
  res.render('product-m',{
    val: ts_2020,
    name: req.query.name
  });
});
r.use('/tv_series/2019/title',(req,res,next)=>{
  res.render('product-m',{
    val: ts_2019,
    name: req.query.name
  });
});
r.use('/tv_series/2018/title',(req,res,next)=>{
  res.render('product-m',{
    val: ts_2018,
    name: req.query.name
  });
});
r.use('/tv_series/2017/title',(req,res,next)=>{
  res.render('product-m',{
    val: ts_2017,
    name: req.query.name
  });
});
r.use('/tv_series/2016/title',(req,res,next)=>{
  res.render('product-m',{
    val: ts_2016,
    name: req.query.name
  });
});
r.use('/tv_series/2015/title',(req,res,next)=>{
  res.render('product-m',{
    val: ts_2015,
    name: req.query.name
  });
});
r.use('/tv_series/2014/title',(req,res,next)=>{
  res.render('product-m',{
    val: ts_2014,
    name: req.query.name
  });
});
r.use('/tv_series/2013/title',(req,res,next)=>{
  res.render('product-m',{
    val: ts_2013,
    name: req.query.name
  });
});
r.use('/tv_series/2012/title',(req,res,next)=>{
  res.render('product-m',{
    val: ts_2012,
    name: req.query.name
  });
});
r.use('/tv_series/2011/title',(req,res,next)=>{
  res.render('product-m',{
    val: ts_2011,
    name: req.query.name
  });
});

module.exports = r;