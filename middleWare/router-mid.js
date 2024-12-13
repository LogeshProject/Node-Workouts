const express = require('express');
const router = express.Router();
const app = express()

const port = 3003

router.use((req, res, next) => {
  console.log('This is a router-level middleware');
  next();
});

router.get('/profile', (req, res) => {
  res.send('User Profile');
});

app.use('/', router); 

app.listen(port , ()=>{
    console.log(`server running on :${port}`)
})