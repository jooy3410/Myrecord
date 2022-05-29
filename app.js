const express = require('express')
const app = express()
const router = express.Router();

app.set('port', process.env.PORT || 3000)

//routes setup
var user = require('./routes/user.js');

app.use('/user', user);

app.listen(app.get('port'), () =>{
	console.log('3000 Port : 서버 실행 중')
});
