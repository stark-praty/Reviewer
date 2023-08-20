const express = require('express');
const r = express.Router();
const csv = require('csv-parser')
const fs = require('fs');
const { memoryUsage } = require('process');
const app = [];
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

r.use('/action',(req,res,next)=>{
  res.render('app_products',{
    val: action,
    value: 'action',
    valu: 'ACTION',
    page: req.query.page
  });
});
r.use('/adventure',(req,res,next)=>{
  res.render('app_products',{
    val: adventure,
    value: 'adventure',
    valu: 'ADVENTURE',
    page: req.query.page
  });
});
r.use('/arcade',(req,res,next)=>{
  res.render('app_products',{
    val: arcade,
    value: 'arcade',
    valu: 'ARCADE',
    page: req.query.page
  });
});
r.use('/art_and_design',(req,res,next)=>{
  res.render('app_products',{
    val: art_and_design,
    value: 'art_and_design',
    valu: 'ART AND DESIGN',
    page: req.query.page
  });
});
r.use('/auto_and_vehicles',(req,res,next)=>{
  res.render('app_products',{
    val: auto_and_vehicles,
    value: 'auto_and_vehicles',
    valu: 'AUTO AND VEHCLES',
    page: req.query.page
  });
});
r.use('/beauty',(req,res,next)=>{
  res.render('app_products',{
    val: beauty,
    value: 'beauty',
    valu: 'BEAUTY',
    page: req.query.page
  });
});
r.use('/board',(req,res,next)=>{
  res.render('app_products',{
    val: board,
    value: 'board',
    valu: 'BOARD',
    page: req.query.page
  });
});
r.use('/books_and_reference',(req,res,next)=>{
  res.render('app_products',{
    val: books_and_reference,
    value: 'books_and_reference',
    valu: 'BOOK AND REFERENCE',
    page: req.query.page
  });
});
r.use('/business',(req,res,next)=>{
  res.render('app_products',{
    val: business,
    value: 'business',
    valu: 'BUSINESS',
    page: req.query.page
  });
});
r.use('/card',(req,res,next)=>{
  res.render('app_products',{
    val: card,
    value: 'card',
    valu: 'CARD',
    page: req.query.page
  });
});
r.get('/casino',(req,res,next)=>{
  res.render('app_products',{
    val: casino,
    value: 'casino',
    valu: 'CASINO',
    page: req.query.page
  });
});
r.use('/casual',(req,res,next)=>{
  res.render('app_products',{
    val: casual,
    value: 'casual',
    valu: 'CASUAL',
    page: req.query.page
  });
});
r.use('/communication',(req,res,next)=>{
  res.render('app_products',{
    val: communication,
    value: 'communication',
    valu: 'COMMUNICATION',
    page: req.query.page
  });
});
r.use('/dating',(req,res,next)=>{
  res.render('app_products',{
    val: dating,
    value: 'dating',
    valu: 'DATING',
    page: req.query.page
  });
});
r.use('/education',(req,res,next)=>{
  res.render('app_products',{
    val: education,
    value: 'education',
    valu: 'EDUCATION',
    page: req.query.page
  });
});
r.use('/educational',(req,res,next)=>{
  res.render('app_products',{
    val: educational,
    value: 'educational',
    valu: 'EDUCATIONAL',
    page: req.query.page
  });
});
r.use('/entertainment',(req,res,next)=>{
  res.render('app_products',{
    val: entertainment,
    value: 'entertainment',
    valu: 'ENTERTAINMENT',
    page: req.query.page
  });
});
r.use('/events',(req,res,next)=>{
  res.render('app_products',{
    val: events,
    value: 'events',
    valu: 'EVENTS',
    page: req.query.page
  });
});
r.use('/finance',(req,res,next)=>{
  res.render('app_products',{
    val: finance,
    value: 'finance',
    valu: 'FINANCE',
    page: req.query.page
  });
});
r.use('/food_and_drink',(req,res,next)=>{
  res.render('app_products',{
    val: food_and_drink,
    value: 'food_and_drink',
    valu: 'FOOD AND FRINK',
    page: req.query.page
  });
});
r.use('/health_and_fitness',(req,res,next)=>{
  res.render('app_products',{
    val: health_and_fitness,
    value: 'health_and_fitness',
    valu: 'HEAKTH AND FITNESS',
    page: req.query.page
  });
});
r.use('/house_and_home',(req,res,next)=>{
  res.render('app_products',{
    val: house_and_home,
    value: 'house_and_home',
    valu: 'HOUSE AND HOME',
    page: req.query.page
  });
});
r.use('/libraries_and_demo',(req,res,next)=>{
  res.render('app_products',{
    val: libraries_and_demo,
    value: 'libraries_and_demo',
    valu: 'LIBRARIES AND DEMO',
    page: req.query.page
  });
});
r.use('/lifestyle',(req,res,next)=>{
  res.render('app_products',{
    val: lifestyle,
    value: 'lifestyle',
    valu: 'LIFESTYLE',
    page: req.query.page
  });
});
r.use('/maps_and_navigation',(req,res,next)=>{
  res.render('app_products',{
    val: maps_and_navigation,
    value: 'maps_and_navigation',
    valu: 'MAPS AND NAVIGATION',
    page: req.query.page
  });
});
r.use('/medical',(req,res,next)=>{
  res.render('app_products',{
    val: medical,
    value: 'medical',
    valu: 'MEDICAL',
    page: req.query.page
  });
});
r.use('/music',(req,res,next)=>{
  res.render('app_products',{
    val: music,
    value: 'music',
    valu: 'MUSIC',
    page: req.query.page
  });
});
r.use('/music_and_audio',(req,res,next)=>{
  res.render('app_products',{
    val: music_and_audio,
    value: 'music_and_audio',
    valu: 'MUSIC AND AUDIO',
    page: req.query.page
  });
});
r.use('/news_and_magazines',(req,res,next)=>{
  res.render('app_products',{
    val: news_and_magazines,
    value: 'news_and_magazines',
    valu: 'NEWS AND MAGAZINES',
    page: req.query.page
  });
});
r.use('/parenting',(req,res,next)=>{
  res.render('app_products',{
    val: parenting,
    value: 'parenting',
    valu: 'PARENTING',
    page: req.query.page
  });
});
r.use('/personalization',(req,res,next)=>{
  res.render('app_products',{
    val: personalization,
    value: 'personalization',
    valu: 'PERSONALIZATION',
    page: req.query.page
  });
});
r.use('/photgraph',(req,res,next)=>{
  res.render('app_products',{
    val: photograph,
    value: 'photograph',
    valu: 'PHOTOGRAPH',
    page: req.query.page
  });
});
r.use('/productivity',(req,res,next)=>{
  res.render('app_products',{
    val: productivity,
    value: 'productivity',
    valu: 'PRODUCTIVITY',
    page: req.query.page
  });
});
r.use('/puzzle',(req,res,next)=>{
  res.render('app_products',{
    val: puzzle,
    value: 'puzzle',
    valu: 'PUZZLE',
    page: req.query.page
  });
});
r.use('/racing',(req,res,next)=>{
  res.render('app_products',{
    val: racing,
    value: 'racing',
    valu: 'RACING',
    page: req.query.page
  });
});
r.use('/role_playing',(req,res,next)=>{
  res.render('app_products',{
    val: role_playing,
    value: 'role_playing',
    valu: 'ROLE PLAYING',
    page: req.query.page
  });
});
r.use('/shopping',(req,res,next)=>{
  res.render('app_products',{
    val: shopping,
    value: 'shopping',
    valu: 'SHOPPING',
    page: req.query.page
  });
});
r.use('/simulation',(req,res,next)=>{
  res.render('app_products',{
    val: simulation,
    value: 'simulation',
    valu: 'SIMULATION',
    page: req.query.page
  });
});
r.use('/social',(req,res,next)=>{
  res.render('app_products',{
    val: social,
    value: 'social',
    valu: 'SOCIAL',
    page: req.query.page
  });
});
r.use('/sports',(req,res,next)=>{
  res.render('app_products',{
    val: sports,
    value: 'sports', 
    valu: 'SPORTS',
    page: req.query.page
  });
});
r.use('/strategy',(req,res,next)=>{
  res.render('app_products',{
    val: strategy,
    value: 'strategy',
    valu: 'STRATEGY',
    page: req.query.page
  });
});
r.use('/tools',(req,res,next)=>{
  res.render('app_products',{
    val: tools,
    value: 'tools',
    valu: 'TOOLS',
    page: req.query.page
  });
});
r.use('/travel_and_local',(req,res,next)=>{
  res.render('app_products',{
    val: travel_and_local,
    value: 'travel_and_local',
    valu: 'TRAVEL AND LOCAL',
    page: req.query.page
  });
});
r.use('/trivia',(req,res,next)=>{
  res.render('app_products',{
    val: trivia,
    value: 'trivia',
    valu: 'TRIVIA',
    page: req.query.page
  });
});
r.use('/video_players_and_editors',(req,res,next)=>{
  res.render('app_products',{
    val: video_players_and_editors,
    value: 'video_player_and_editors',
    valu: 'VIDEO PLAYERS AND EDITORS',
    page: req.query.page
  });
});
r.use('/weather',(req,res,next)=>{
  res.render('app_products',{
    val: weather,
    value: 'weather',
    valu: 'WEATHER',
    page: req.query.page
  });
});
r.use('/word',(req,res,next)=>{
  res.render('app_products',{
    val: word,
    value: 'word',
    valu: 'WORD',
    page: req.query.page
  });
});

module.exports = r;