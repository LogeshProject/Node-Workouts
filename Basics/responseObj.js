const express = require('express');
const app = express();

app.get('/', (req, res) => {

  // res.send({ message: 'Hello, World!'});

  res.write('Hello, ');
  res.write('World!');
  res.end();
});

app.listen(3000, () => console.log('Server running on port 3000'));

 
// res.write  => low-level methods      |        sending multiple chunks    


// res.send() => high-level methods     |        automatically => content-type => end the close .     
