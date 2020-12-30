
// requiering the two packages we just installed(exress and body-parser)
const express = require
("express");
const bodyParser = require("body-parser");
// we requier the module from the date.js file
const date = require(__dirname + "/date.js")
// creating app constant by using express
const app = express();
// tells app to use ejs as its view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items =["Buy Food","Cook Food","Eat Food"];
const workItems = [];

// creating a simple get route ,sends the browser a hello word when a user tries to acces the home route
app.get("/",function(req,res){

// inside here we can make some logic or some calculations on server side and send the result using res.send ()
// let today = new Date();
// let currentDay = today.getDay();
// let options = {
//   weekday:"long",
//   day:"numeric",
//   month:"long"
// }
// let day = today.toLocaleDateString("en-US",options);

// we used module from the date.js file to get the vaalue of the varoable date
const day = date.getDate();

  res.render("list",{listTitle:day , newListItems:items});
})

app.post("/",function(req,res){

const item = req.body.newItem;
if(req.body.list==="work List"){
  workItems.push(item);
    res.redirect("/work");
}else{
  items.push(item);
  res.redirect("/");
}
})

app.get("/work",function(req,res){
  res.render("list",{listTitle:"work List" , newListItems:workItems})
})

app.get("/about", function(req,res){
  res.render("about")
})


// we are listening on port 3000
app.listen(3000,function(){
  console.log("Server started on port 3000");
})
