const express = require('express');
const r = express.Router();
const csv = require('csv-parser')
const fs = require('fs')
const app = [],reviews = [],ss = [];
const action = [],adventure = [],arcade = [],art_and_design = [],auto_and_vehicles = [],beauty = [],board = [],books_and_reference = [];
const business = [],card = [],casino = [],communication = [],dating = [],education = [],educational = [],entertainment = [],medical = [];
const events = [],finance = [],food_and_drink = [],health_and_fitness = [],libraries_and_demo = [],lifestyle = [],house_and_home = [];
const music = [],music_and_audio = [],news_and_magazines = [],parenting = [],personalization = [],photograph = [],productivity = [];
const racing = [],role_playing = [],shopping = [],simulation = [],social = [],sports = [],strategy = [],tools = [],puzzle = [],comics = [];
const video_players_and_editors = [],weather = [],word = [],casual = [],travel_and_local = [],trivia = [],maps_and_navigation = [];

fs.createReadStream('./public/data/app_details.csv')
.pipe(csv({}))
.on('data',(data) => app.push(data))
.on('end',() =>{
  for(i of app){
    if(i.genre == 'Action'){ action.push(i); }
    else if(i.genre == 'Adventure'){ adventure.push(i); }
    else if(i.genre == 'Arcade'){ arcade.push(i); }
    else if(i.genre == 'Art & Design'){ art_and_design.push(i); }
    else if(i.genre == 'Auto & Vehicles'){ auto_and_vehicles.push(i); }
    else if(i.genre == 'Beauty'){ beauty.push(i); }
    else if(i.genre == 'Board'){ board.push(i); }
    else if(i.genre == 'Books & Reference'){ books_and_reference.push(i); }
    else if(i.genre == 'Business'){ business.push(i); }
    else if(i.genre == 'Card'){ card.push(i); }
    else if(i.genre == 'Casino'){ casino.push(i); }
    else if(i.genre == 'Casual'){ casual.push(i); }
    else if(i.genre == 'Comics'){ comics.push(i); }
    else if(i.genre == 'Communication'){ communication.push(i); }
    else if(i.genre == 'Dating'){ dating.push(i); }
    else if(i.genre == 'Education'){ education.push(i); }
    else if(i.genre == 'Educational'){ educational.push(i); }
    else if(i.genre == 'Entertainment'){ entertainment.push(i); }
    else if(i.genre == 'Events'){ events.push(i); }
    else if(i.genre == 'Finance'){ finance.push(i); }
    else if(i.genre == 'Food & Drink'){ food_and_drink.push(i); }
    else if(i.genre == 'Health & Fitness'){ health_and_fitness.push(i); }
    else if(i.genre == 'House & Home'){ house_and_home.push(i); }
    else if(i.genre == 'Libraries & Demo'){ libraries_and_demo.push(i); }
    else if(i.genre == 'Lifestyle'){ lifestyle.push(i);}
    else if(i.genre == 'Maps & Navigation'){ maps_and_navigation.push(i);}
    else if(i.genre == 'Medical'){ medical.push(i);}
    else if(i.genre == 'Music'){ music.push(i);}
    else if(i.genre == 'Music & Audio'){ music_and_audio.push(i);}
    else if(i.genre == 'News & Magazines'){ news_and_magazines.push(i);}
    else if(i.genre == 'Parenting'){ parenting.push(i);}
    else if(i.genre == 'Personalization'){ personalization.push(i);}
    else if(i.genre == 'Photograph'){ photograph.push(i);}
    else if(i.genre == 'Productivity'){ productivity.push(i);}
    else if(i.genre == 'Puzzle'){ puzzle.push(i); }
    else if(i.genre == 'Racing'){ racing.push(i); }
    else if(i.genre == 'Role Playing'){ role_playing.push(i); }
    else if(i.genre == 'Shopping'){ shopping.push(i); }
    else if(i.genre == 'Simulation'){ simulation.push(i); }
    else if(i.genre == 'Social'){ social.push(i); }
    else if(i.genre == 'Sports'){ sports.push(i); }
    else if(i.genre == 'Strategy'){ strategy.push(i); }
    else if(i.genre == 'Tools'){ tools.push(i); }
    else if(i.genre == 'Travel & Local'){ travel_and_local.push(i); }
    else if(i.genre == 'Trivia'){ trivia.push(i); }
    else if(i.genre == 'Video Players & Editors'){ video_players_and_editors.push(i); }
    else if(i.genre == 'Weather'){ weather.push(i); }
    else if(i.genre == 'Word'){ word.push(i); }
  }
});

fs.createReadStream('./public/data/app_reviews.csv')
.pipe(csv({}))
.on('data',(data) => reviews.push(data))
.on('end',() => {
});

fs.createReadStream('./public/data/app_sshots.csv')
.pipe(csv({}))
.on('data',(data) => ss.push(data))
.on('end',() => {
});

r.use('/action/android',(req,res,next)=>{
  res.render('product-a',{
    val: action,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/adventure/android',(req,res,next)=>{
  res.render('product-a',{
    val: adventure,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/arcade/android',(req,res,next)=>{
  res.render('product-a',{
    val: arcade,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/art_and_design/android',(req,res,next)=>{
  res.render('product-a',{
    val: art_and_design,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/auto_and_vehicles/android',(req,res,next)=>{
  res.render('product-a',{
    val: auto_and_vehicles,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/beauty/android',(req,res,next)=>{
  res.render('product-a',{
    val: beauty,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/board/android',(req,res,next)=>{
  res.render('product-a',{
    val: board,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/books_and_reference/android',(req,res,next)=>{
  res.render('product-a',{
    val: books_and_reference,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/business/android',(req,res,next)=>{
  res.render('product-a',{
    val: business,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/card/android',(req,res,next)=>{
  res.render('product-a',{
    val: card,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.get('/casino/android',(req,res,next)=>{
  res.render('product-a',{
    val: casino,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/casual/android',(req,res,next)=>{
  res.render('product-a',{
    val: casual,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/communication/android',(req,res,next)=>{
  res.render('product-a',{
    val: communication,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/dating/android',(req,res,next)=>{
  res.render('product-a',{
    val: dating,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/education/android',(req,res,next)=>{
  res.render('product-a',{
    val: education,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/educational/android',(req,res,next)=>{
  res.render('product-a',{
    val: educational,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/entertainment/android',(req,res,next)=>{
  res.render('product-a',{
    val: entertainment,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/events/android',(req,res,next)=>{
  res.render('product-a',{
    val: events,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/finance/android',(req,res,next)=>{
  res.render('product-a',{
    val: finance,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/food_and_drink/android',(req,res,next)=>{
  res.render('product-a',{
    val: food_and_drink,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/health_and_fitness/android',(req,res,next)=>{
  res.render('product-a',{
    val: health_and_fitness,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/house_and_home/android',(req,res,next)=>{
  res.render('product-a',{
    val: house_and_home,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/libraries_and_demo/android',(req,res,next)=>{
  res.render('product-a',{
    val: libraries_and_demo,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/lifestyle/android',(req,res,next)=>{
  res.render('product-a',{
    val: lifestyle,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/maps_and_navigation/android',(req,res,next)=>{
  res.render('product-a',{
    val: maps_and_navigation,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/medical/android',(req,res,next)=>{
  res.render('product-a',{
    val: medical,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/music/android',(req,res,next)=>{
  res.render('product-a',{
    val: music,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/music_and_audio/android',(req,res,next)=>{
  res.render('product-a',{
    val: music_and_audio,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/news_and_magazines/android',(req,res,next)=>{
  res.render('product-a',{
    val: news_and_magazines,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/parenting/android',(req,res,next)=>{
  res.render('product-a',{
    val: parenting,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/personalization/android',(req,res,next)=>{
  res.render('product-a',{
    val: personalization,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/photgraph/android',(req,res,next)=>{
  res.render('product-a',{
    val: photograph,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/productivity/android',(req,res,next)=>{
  res.render('product-a',{
    val: productivity,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/puzzle/android',(req,res,next)=>{
  res.render('product-a',{
    val: puzzle,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/racing/android',(req,res,next)=>{
  res.render('product-a',{
    val: racing,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/role_playing/android',(req,res,next)=>{
  res.render('product-a',{
    val: role_playing,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/shopping/android',(req,res,next)=>{
  res.render('product-a',{
    val: shopping,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/simulation/android',(req,res,next)=>{
  res.render('product-a',{
    val: simulation,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/social/android',(req,res,next)=>{
  res.render('product-a',{
    val: social,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/sports/android',(req,res,next)=>{
  res.render('product-a',{
    val: sports,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/strategy/android',(req,res,next)=>{
  res.render('product-a',{
    val: strategy,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/tools/app',(req,res,next)=>{
  res.render('product-a',{
    val: tools,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/travel_and_local/android',(req,res,next)=>{
  res.render('product-a',{
    val: travel_and_local,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/trivia/android',(req,res,next)=>{
  res.render('product-a',{
    val: trivia,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/video_players_and_editors/android',(req,res,next)=>{
  res.render('product-a',{
    val: video_players_and_editors,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/weather/android',(req,res,next)=>{
  res.render('product-a',{
    val: weather,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});
r.use('/word/android',(req,res,next)=>{
  res.render('product-a',{
    val: word,
    value: reviews,
    ssh: ss,
    name: req.query.name
  });
});

module.exports = r;