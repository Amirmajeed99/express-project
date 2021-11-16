const path = require('path');
const express = require('express');
const app = express();
const port = 8000;


//need absloute path
// console.log(__dirname);

//we need path of public folder,thus is how we cn get a path of any folder
// console.log(path.join(__dirname,'../public'));

//now storing this path into a variable
const staticPath = path.join(__dirname, '../public')

//using built in middle ware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send('this is my ist express app ');
  //  res.send(index.html);

});

app.get("/about", (req, res) => {
  res.send('this is my ABOUT PAGE OF ist express app ');
});

app.listen(port, () => {
  console.log(`you r listening to port no :${port}`);
});