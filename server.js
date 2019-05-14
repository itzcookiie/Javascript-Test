const express = require('express'),
app = express(),
port = 8000,
cors = require('cors'),
fs = require('fs');

app.use(express.static(__dirname ))
app.use(cors());
app.options('*', cors());

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type,  Accept'
//   )
//   next()
// })

//Read the input.txt file
app.get('/data', (req, res) => {
// res.sendFile('input.txt', {root: __dirname })
let readStream = fs.createReadStream(__dirname + '/input.txt')
readStream.on('close', () => {
  // console.log(chunk.toString())
  res.end()
})
readStream.pipe(res)
});

//Display index.html file containing the index.js file
app.get('/', (req,res) => {
  res.sendFile('index.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

