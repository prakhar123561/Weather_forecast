var express = require('express');
var https = require('https')
var router = express.Router();

router.get('/',function(req,res){
  res.render('index',{view : false})
})

/* GET home page. */
router.post('/',function(req,res){
  var city = req.body.city
  var apikey = '2f7d3cb6467052480b7e8d93c25b66bd'
https.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric',function(response){
   console.log(response.statusCode);
  response.on('data',function(data){
    // console.log('DATA',data)
    var weatherdata = JSON.parse(data)
    var temperature = weatherdata.main.temp_min
    var description = weatherdata.weather[0].description
    var name = weatherdata.name
    var temp_min = weatherdata.main.temp_min
    var temp_max = weatherdata.main.temp_max
    var pressure = weatherdata.main.pressure
    var humidity = weatherdata.main.humidity
    var visibility = weatherdata.visibility
    console.log(visibility)
    // res.write('<h1>Temperature in Dabra <u>'+ temperature + ' </u>degree celcious</h1>')
    // res.write('<h1>The weather consition is <u>'+ description+ '</u></h1>')
    res.render('index',{t : temperature, d : description,name : name, temp_min : temp_min,temp_max : temp_max ,pressure : pressure ,humidity : humidity ,visibility : visibility , view : true})
  })
})

})
module.exports = router;
