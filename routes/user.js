const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const qs = require('qs');
const mysql = require("mysql"); //mysql 모듈 로드
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

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/join', (req, res) => {
  res.render('user/join.ejs')
})


app.post("/join_result", function(req,res){
  console.log(req.body)
  console.log(req.body.email)
  const email = req.body.email;
  const user_name = req.body.user_name;
  const user_pw = req.body.user_pw;
  

  var sql= "INSERT INTO USER_INFO(USER_EMAIL, USER_NAME, USER_PW) VALUES ('email', 'user_name', 'user_pw');"

  connection.query(sql,function(err){
      // connection.end();
      if(!err){
        res.send('success');
        // console.log(rows);
      }
      else{
        console.log(err)
      }
    }
  )
})



module.exports = app;