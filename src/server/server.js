//DEFINITIONS
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios').default;


const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))
app.use(express.static('dist'))

console.log(__dirname)

console.log(process.env);


let projectData = []
const pixabyKEY = process.env.REACT_pixabyAPI;
const weatherbitKEY = process.env.REACT_weatherAPIKey;
const geonameKEY = process.env.REACT_geonameUsername;


//Get route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    res.send(projectData);
  })



app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



//API  Keys 


app.post('/addAPI', (req,res) =>{
    const geonameDataURL = (`api.geonames.org/searchJSON?location&username${geonameKEY}`);
    fetch (geonameDataURL)
    .then (res = res.json())
    .then(geonameData => {
        if (geonameData.geonames[0] ==null) {
            res.console.error().json({location:'invalid'});
            return;
        }
    
app.post('/addAPI', (req,res) =>{

    const weatherBitURL = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=&key=${weatherbitKEY}`;
    
        fetch (weatherBitURL)
        .then (res => res.json())
        .then (weatherData => {

            
app.post('/addAPI', (req,res) =>{

        const pixabyURL = `https://pixabay.com/api/?key=${pixabyKEY}&q=${image}`;

        fetch (pixabyURL)
        .then (res => res.json())
        .then (pixabyData => {
            res.send({geonameData, weatherData, pixabyData});
    
    })

    })
 
    })
})


const dotenv = require('dotenv');
dotenv.config();


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
    })

    })

})