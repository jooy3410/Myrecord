const express = require('express')
const app = express()
const router = express.Router();
const path = require('path');
const mysql = require("mysql"); //mysql 모듈 로드

app.set('port', process.env.PORT || 3000)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//database setting

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port : '3306',
    user: 'root',
    password: 'abcd1234',
    database: 'TEST_DB'
});


connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");
} else {
    console.log("Error connecting database ... \n\n");
    console.log(err)
}
});

//routes setup
var user = require('./routes/user.js');

app.use('/user', user);

app.listen(app.get('port'), () =>{
	console.log('3000 Port : 서버 실행 중')
});
