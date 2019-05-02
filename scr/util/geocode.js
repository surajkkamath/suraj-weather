// using callback 
// accessing long lat loc
const request = require('request')
const geocode = (address , callback) => {
    const geourl ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic3VyYWprbXRoIiwiYSI6ImNqdXM4b2o4cTN2ZGwzeW9heTA0NHczeWYifQ.l0oCBgsU6Pg6S3wywWkn3w&limit=1'

request({ url : geourl, json: true}, (error,response) => { 
    if(error)
    {
        callback('unable to connect', undefined)
    }
    else if(response.body.features.length ===0 ){
        callback('undefined location', undefined)
    }
else{ 
    callback(undefined, {
  lat : response.body.features[0].center[1], 
  long : response.body.features[0].center[0],
 loc :   response.body.features[0].place_name
} )                                            
}
})
}


module.exports = geocode
