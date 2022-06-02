const express = require('express')
const app = express()
const router = express.Router();
const path = require('path');
const mysql = require("mysql");

app.set('port', process.env.PORT || 3000)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//database setting

//routes setup
var user = require('./routes/user.js');

app.use('/user', user);

app.listen(app.get('port'), () =>{
	console.log('3000 Port : 서버 실행 중')
});
