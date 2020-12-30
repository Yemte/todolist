
// creating a module
// module.exports = getDate; we can write like this when we have just one function
//module.exports.getDate = getDate;
// we can omite the word module and caun use simply the word exports
 exports.getDate = getDate;
function getDate(){
  const today = new Date();
  const currentDay = today.getDay();
  const options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  }
  return  today.toLocaleDateString("en-US",options);
}

//module.exports.getDay = getDay;
module.exports.getDay = getDay;
function getDay(){
  const today = new Date();
  const currentDay = today.getDay();
  const options = {

      weekday:"long",

  }
  return  today.toLocaleDateString("en-US",options);
}
