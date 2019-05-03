//accessing weather

const request = require('request')
const forecast = (lat,long , callback) => {   
const url ='https://api.darksky.net/forecast/8f40047249a6c41c925e2bc8233d9237/'+ lat  +',' + long +'?units=si'
//request function to make request with 2 arg,first is option object arg {url:url, json: true} 
//that is what we would like to do 
//json:true will auto parse the json string so no need of using JSON.parse 
// 2nd arg is function to run 

request({ url : url, json: true}, (error,response) => { 
    if (error){
        callback('cant connect',undefined)
    }
    else if (response.body.error)
    {
        callback('wrong input', undefined) 
    }
    else{
       // console.log(response.body.daily.data[0])// to print what are the properties daily data has
        callback(undefined, 'it is currently ' + response.body.currently.temperature + ' degrees. Today highest temperature was ' + response.body.daily.data[0].temperatureHigh + ' Today lowest temperature was ' + response.body.daily.data[0].temperatureLow + ' There is a ' +  response.body.currently.precipProbability + ' % chances of rain')        
                                                   
    }
    })
    }
    module.exports = forecast
