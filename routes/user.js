const express = require("express");
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port : '3306',
  user: 'root',
  password: 'abcd1234',
  database: 'TEST_DB'
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/join', (req, res) => {
  res.render('user/join.ejs')
})

app.post('/join_result', (req,res) =>{
  const email = req.body.email;
  const user_name = req.body.user_name;
  const user_pw = req.body.user_pw;

  connection.query(
    "INSERT INTO USER_INFO(USER_EMAIL, USER_NAME, USER_PW) VALUES ('email', 'user_name', 'user_pw');"
  )
  
  res.send()
})
module.exports = app;