var firebase = require('firebase/app');
var firebasean= require('firebase/analytics');
var firebaseau= require('firebase/auth');
var firebasefi= require('firebase/firestore');
var admin = require('firebase-admin');


const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');
//const csv = require('csv-parser')
// var user = firebase.auth.currentuser;
// res.render('Main',{
//   luser: user
// });


const pagep = require('./phone/product_p.js');
const pagem = require('./movies/product_m.js');
const pagea = require('./app/product_a.js');
const productpagep = require('./phone/phone_product');
const productpagem = require('./movies/movie_product');
const productpagea = require('./app/app_product');

var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reviewerwb-default-rtdb.firebaseio.com"
});
const firebaseConfig = {
  apiKey: "AIzaSyC-3cnsvHcZJ5l_xiWUI6orQeneBgeQs08",
  authDomain: "reviewer-cbc80.firebaseapp.com",
  databaseURL: "https://reviewer-cbc80-default-rtdb.firebaseio.com",
  projectId: "reviewer-cbc80",
  storageBucket: "reviewer-cbc80.appspot.com",
  messagingSenderId: "607486699146",
  appId: "1:607486699146:web:4f0a24b666d5f500e72f73",
  measurementId: "G-FTZSRXMYM0"
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var user = firebase.auth.currentuser;

const csrfMiddleware = csrf({ cookie: true });
const app = express();
app.set('view engine','ejs');
app.set('views','html');

//for public library access
app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);


app.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  next();
});
app.get("/profile", function (req, res) {
  const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.post("/sessionLogin", (req, res) => {
  const idToken = req.body.idToken.toString();
  const csrfToken = req.body.csrfToken.toString();

  if (csrfToken !== req.cookies.csrfToken) {
    res.status(401).send('UNAUTHORIZED REQUEST!');
    return;
  }

  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        const options = { maxAge: expiresIn, httpOnly: true, secure: true};
        res.cookie("session", sessionCookie, options);
        res.end(JSON.stringify({ status: "success" }));
      },
      (error) => {
        res.status(401).send("UNAUTHORIZED REQUEST!");
      }
    );
});

app.get("/sessionLogout", (req, res) => {
  res.clearCookie("session");
  res.redirect("/login");
});

app.use('/phone',productpagep);

app.use('/entertainment',productpagem);

app.use('/app',productpagea);

app.use('/phone',pagep);

app.use('/entertainment',pagem);

app.use('/app',pagea);

app.use('/phone',(req,res,next)=>{
  res.render('more_page_p',{
  });
});

app.use('/entertainment',(req,res,next)=>{
  res.render('more_page_m',{
  });
});

app.use('/app',(req,res,next)=>{
  res.render('more_page_a',{
  });
});

app.use('/login',(req,res,next)=>{
  res.render('login',{
  });
});

app.get('/',(req,res,next)=>{
  res.render('Main',{
    luser: user
  });
});

app.listen(5500);
auth.useEmulator("http://localhost:5500");






//const product = [];
/* fs.createReadStream('./public/data/phone_spec/lenovo.csv')
.pipe(csv({}))
.on('data',(data) => product_p.push(data))
.on('end',() =>{
}); */