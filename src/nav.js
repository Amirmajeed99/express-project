//in this videp we will se how routing works in express js
const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req, res)=>{
//  res.send('<h1>well come to home page</h1>');
//sending multiple html code lines
res.write('<h1>well come to home page</h1>');
res.write('<h1>well come to home page</h1>');
res.send();// it is fr stoping the server 

});

app.get('/about',(req, res)=>{
    res.send('well come to about us page');
   });

   app.get('/contact',(req, res)=>{
    res.status(200).send('well come to contact us page');
   });

   //json data
//    app.get('/json',(req, res)=>{
//     res.status(200).send([
//         {
//          id: 1,
//          name: 'Amir Majeed',
//     },
//     {
//         id: 1,
//         name: 'Amir Majeed',
//    },
//    {
//     id: 1,
//     name: 'Amir Majeed',
// },
// {
//     id: 1,
//     name: 'Amir Majeed',
// },
// ]);
//    });

//second way of sending object 
app.get('/json',(req, res)=>{
    res.status(200).json([
        {
         id: 1,
         name: 'Amir Majeed',
    },
    {
        id: 1,
        name: 'Amir Majeed',
   },
   {
    id: 1,
    name: 'Amir Majeed',
},
{
    id: 1,
    name: 'Amir Majeed',
},
]);
   });
   

app.listen(port,()=>{
    console.log(`you are listening to port no : ${port}`);
})