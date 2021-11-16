//in this video we r going to how to create static website in expres js
const express = require('express');
const path = require('path');
const requests = require('requests');
//using partials we hav to require hbs
const hbs = require('hbs');
const app = express();
const port = 8000;

//getting path of public folder
const staticPath = path.join(__dirname,'../public');//serving static website
//console.log(staticPath);

//path for changing name of views directory
const templatePath = path.join(__dirname,'../templates');

//path for partials
const partialsPath = path.join(__dirname,'../templates/partials');

//to set the view engine
app.set('view engine','hbs')
//using builtin middle ware
 app.use(express.static(staticPath));

//  this i did made template directory public 
//  app.use(express.static(templatePath));


 //how we can change the name for views folder
//  app.set('view',path)
app.set('views',templatePath); 

//using partials
// hbs.registerPartial(absloute path of partials )
hbs.registerPartials(partialsPath);

//template engine route
app.get('/',(req,res)=>{
    res.render('views/index',{
        //sending dynamic content
        extra : 'LUCKY99'
    });
    
});
//this about is of my website
app.get('/about',(req,res)=>{
    res.render('views/about',{
    //how to show the input typed in url to be shown in a page
        name :req.query.name,
        age : req.query.age
        
    });
    //using query string how it works
    // console.log(req.query);
    // console.log(req.query.name);//accessing the query string by its variable i,e name
    // console.log(req.query);

    


});

//this about is for real time weather API
//bt dosent work idk y
// app.get('/about',(req,res)=>{
    
//     requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=55186f5d32ac1bded1b8c670e07e45fd`)
//             .on('data',  (chunk) =>{
//                 //to convert data into obj form
//                 const objdata = JSON.parse(chunk)
//                 //now converting object data into array form
//                 const arrydata = [objdata];
//                  console.log(`City name is : ${arrydata[0].name} & the temperature is : ${arrydata[0].main.temp}`);
               
//                 res.write(arrydata[0].name);
               
//             })
//             .on('end', (err) =>{
//                 if (err) return console.log('connection closed due to errors', err);

//                 // console.log('end');
//                 res.end();
//             });
// });
app.get('/',(req,res)=>{
 res.send('hello from the express server');
//  res.send(index.html);
});

//how we can show 404 page in express by using special that is * operator
app.get('*',(req,res)=>{
    res.render('views/error')
})

//listen fr the app
app.listen(port,()=>{
    console.log(`you are listening to port no : ${port}`);
});