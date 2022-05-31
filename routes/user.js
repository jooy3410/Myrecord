const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/join', (req, res) => {
  res.render('user/join.ejs')
})

app.post('/join_result', (req,res) =>{
  res.redirect()
})
module.exports = app;