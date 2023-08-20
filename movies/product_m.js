const express = require('express');
const r = express.Router();
const csv = require('csv-parser')
const fs = require('fs');
const { memoryUsage } = require('process');
const m = [];
const m_2011 = [],m_2012 = [],m_2013 = [],m_2014 = [],m_2015 = [],m_2016 = [],m_2017 = [],m_2018 = [],m_2019 = [],m_2020 = [];
const ts_2011 = [],ts_2012 = [],ts_2013 = [],ts_2014 = [],ts_2015 = [],ts_2016 = [],ts_2017 = [],ts_2018 = [],ts_2019 = [],ts_2020 = [];

fs.createReadStream('./public/data/movies_details.csv')
.pipe(csv({}))
.on('data',(data) => m.push(data))
.on('end',() =>{
  for(let i of m){
    if(i.tit_type == 'movie'){ m_2020.push(i); }
    else if(i.tit_type == 'tvSeries' || i.tit_type == 'tvMiniSeries'){ ts_2020.push(i); }
  }
});

r.use('/movies/2020',(req,res,next)=>{
  res.render('m_products',{
    val: m_2020,
    value: 'movies',
    page: req.query.page
  });
});
r.use('/movies/2019',(req,res,next)=>{
  res.render('m_products',{
    val: m_2019,
    value: 'movies',
    page: req.query.page
  });
});
r.use('/movies/2018',(req,res,next)=>{
  res.render('m_products',{
    val: m_2018,
    value: 'movies',
    page: req.query.page
  });
});
r.use('/movies/2017',(req,res,next)=>{
  res.render('m_products',{
    val: m_2017,
    value: 'movies',
    page: req.query.page
  });
});
r.use('/movies/2016',(req,res,next)=>{
  res.render('m_products',{
    val: m_2016,
    value: 'movies',
    page: req.query.page
  });
});
r.use('/movies/2015',(req,res,next)=>{
  res.render('m_products',{
    val: m_2015,
    value: 'movies',
    page: req.query.page
  });
});
r.use('/movies/2014',(req,res,next)=>{
  res.render('m_products',{
    val: m_2014,
    value: 'movies',
    page: req.query.page
  });
});
r.use('/movies/2013',(req,res,next)=>{
  res.render('m_products',{
    val: m_2013,
    value: 'movies',
    page: req.query.page
  });
});
r.use('/movies/2012',(req,res,next)=>{
  res.render('m_products',{
    val: m_2012,
    value: 'movies',
    page: req.query.page
  });
});
r.use('/movies/2011',(req,res,next)=>{
  res.render('m_products',{
    val: m_2011,
    value: 'movies',
    page: req.query.page
  });
});
r.use('/tv_series/2020',(req,res,next)=>{
  res.render('m_products',{
    val: ts_2020,
    value: 'tv_series',
    page: req.query.page
  });
});
r.use('/tv_series/2019',(req,res,next)=>{
  res.render('m_products',{
    val: ts_2019,
    value: 'tv_series',
    page: req.query.page
  });
});
r.use('/tv_series/2018',(req,res,next)=>{
  res.render('m_products',{
    val: ts_2018,
    value: 'tv_series',
    page: req.query.page
  });
});
r.use('/tv_series/2017',(req,res,next)=>{
  res.render('m_products',{
    val: ts_2017,
    value: 'tv_series',
    page: req.query.page
  });
});
r.use('/tv_series/2016',(req,res,next)=>{
  res.render('m_products',{
    val: ts_2016,
    value: 'tv_series',
    page: req.query.page
  });
});
r.use('/tv_series/2015',(req,res,next)=>{
  res.render('m_products',{
    val: ts_2015,
    value: 'tv_series',
    page: req.query.page
  });
});
r.use('/tv_series/2014',(req,res,next)=>{
  res.render('m_products',{
    val: ts_2014,
    value: 'tv_series',
    page: req.query.page
  });
});
r.use('/tv_series/2013',(req,res,next)=>{
  res.render('m_products',{
    val: ts_2013,
    value: 'tv_series',
    page: req.query.page
  });
});
r.use('/tv_series/2012',(req,res,next)=>{
  res.render('m_products',{
    val: ts_2012,
    value: 'tv_series',
    page: req.query.page
  });
});
r.use('/tv_series/2011',(req,res,next)=>{
  res.render('m_products',{
    val: ts_2011,
    value: 'tv_series',
    page: req.query.page
  });
});

module.exports = r;