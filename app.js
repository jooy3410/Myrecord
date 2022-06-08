const express = require('express')
const app = express()
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');//로그 찍어주는 모듈

app.set('port', process.env.PORT || 3000)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//database setting

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());




//routes setup
var user = require('./routes/user.js');

app.use('/user', user);

app.listen(app.get('port'), () =>{
	console.log('3000 Port : 서버 실행 중')
});
