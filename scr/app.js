/*const express = require('express')
const app = express() //calling express to generate application and storing in app variable

//now we set the servers by get method which tell the servers what it should do
// it takes 2 arg 1st is an partial URL 2nd is a method with 2 arg request and response
app.get('' , (req,res)=> { // this is root route
    res.send('hello') // sending text response
})

app.get('/help' , (req,res)=> { // this is help route
    res.send('help') // sending text response
})

app.get('/about' , (req,res)=> { // this is help route
    res.send('help') // sending text response
})

//to start thr server we call listen 
app.listen(3000) // listens at port 3000
// press ctrl c 
// go to browser localhost:3000
// instead of starting servers again run nodemon*/

//******************************************************************************** */
//serving HTML and JSON
// sending html and json response
/*const express = require('express')
const app = express() 
app.get('' , (req,res)=> { // this is root route
    res.send('<h1> hello </h1>') // sending HTML response
})

app.get('/help' , (req,res)=> { // this is help route
    res.send({
        name : 'suraj',
        age : 24
    }) // sending JSON object response
})

app.get('/about' , (req,res)=> { // this is help route
    res.send([{
        name : 'suraj'
    },
    {
        age : 24
    }]) // sending json array
})

//to start thr server we call listen 
app.listen(3000)*/

//*************************************************************************************** */

//getting static html page
/*const express = require('express')
const path = require('path')
const app = express()
console.log(__dirname)// prints the directory path
 const publicdir=(path.join(__dirname,'../public'))// using path.join we join to directories
                                                   // '.. means one dir up then /public means public dir
  app.use(express.static(publicdir)) // to serve the public folder static takes us to the folder in public
  app.listen(3000)*/
//************************************************************************************************ */
  // dynamic web page
 /* const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'hbs')// set value to express setting
                             // we are setting view engine
                            // hbs is module we installed
// view or templates should be in root of project under view dir that is web-servers
 
 app.get('',(req,res) => { // access index.hsb
     res.render('index', { // first arg is name of handler ie index 
         name : 'suraj',   // 2nd arg is object ie to make the page dynamic it contains value that view can access
         age : 24          // in index.hsb instead of writting <h1> suraj</h1>
                           // we write <h1>{{ name }} <h1>
     })
 })*/

 //********************************************************************************************* */
 //customizing view directory
 /*const express = require('express')
const path = require('path')
const app = express()

const viewpath = path.join(__dirname,'../templates') // telling the handler to look into this path

app.set('view engine', 'hbs')
app.set('views',viewpath) // setting values to tell express to use this path here views is name and viewpath is variable containing dir
 
app.get('',(req,res) => { 
     res.render('index', { 
         name : 'suraj',  
         age : 24        
                           
     })
 })

 app.get('/help',(req,res) => { // access index.hsb
    res.render('help', { // first arg is name of handler ie index 
        name : 'kamath',   // 2nd arg is object ie to make the page dynamic it contains value that view can access
        age : 25          // in index.hsb instead of writting <h1> suraj</h1>
                          // we write <h1>{{ name }} <h1>
    })
})
 app.listen(3000)*/
 //************************************************************************************* */
 // using partials
 // partials is a template which is part of web page and is re usable

 /*const express = require('express')
const path = require('path')
const hbs = require('hbs') // we require it for partial
const app = express()

const viewpath = path.join(__dirname,'../templates/views') 
const partialpath = path.join(__dirname,'../templates/partial') // parital dir path

app.set('view engine', 'hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)// configuring partial path 
 
app.get('',(req,res) => { 
     res.render('index', { 
         name : 'suraj',  
         age : 24        
                           
     })
 })

 app.get('/help',(req,res) => { // access index.hsb
    res.render('help', { // first arg is name of handler ie index 
        name : 'kamath',   // 2nd arg is object ie to make the page dynamic it contains value that view can access
        age : 25          // in index.hsb instead of writting <h1> suraj</h1>
                          // we write <h1>{{ name }} <h1>
    })
})
 app.listen(3000)*/

 //****************************************************************************** */
 // setting 404 error page

 /*const express = require('express')
 const path = require('path')
 const hbs = require('hbs') // we require it for partial
 const app = express()
 
 const viewpath = path.join(__dirname,'../templates/views') 
 const partialpath = path.join(__dirname,'../templates/partial') // parital dir path
 
 app.set('view engine', 'hbs')
 app.set('views',viewpath)
 hbs.registerPartials(partialpath)// configuring partial path 
  
 app.get('',(req,res) => { 
      res.render('index', { 
          name : 'suraj',  
          age : 24        
                            
      })
  })
 
  app.get('/help',(req,res) => { // access index.hsb
     res.render('help', { // first arg is name of handler ie index 
         name : 'kamath',   // 2nd arg is object ie to make the page dynamic it contains value that view can access
         age : 25          // in index.hsb instead of writting <h1> suraj</h1>
                           // we write <h1>{{ name }} <h1>
     })
 })

 app.get('/help/*',(req,res) => { // we created a new 404.hsb page in view and passed the value of errormsg to it
    res.render('404', { 
        name : 'suraj',  
        age : 24 ,       
        errormsg : 'help error'                  
    })
})

 app.get('*',(req,res) => { //same as above
    res.render('404', { 
        name : 'suraj',  
        age : 24 ,       
        errormsg : 'error in this page'                  
    })
})*/
 /*app.get('*',(req,res) => { // * indicates matching any char 
     res.send('there is 404 error') // normal error msg did not create any error.hsb page so normal res.send
 })

 app.get('/help/*',(req,res) => { // * indicates matching any char after help
    res.send('there is 404 error')
})*/
  //app.listen(3000)

//********************************************************************************************* */

// accessing API through browser
//we use query string

/*const express = require('express')
 const path = require('path')
 const hbs = require('hbs') // we require it for partial
 const app = express()
 
 const viewpath = path.join(__dirname,'../templates/views') 
 const partialpath = path.join(__dirname,'../templates/partial') // parital dir path
 
 app.set('view engine', 'hbs')
 app.set('views',viewpath)
 hbs.registerPartials(partialpath)// configuring partial path 
  
 app.get('',(req,res) => { 
      res.render('index', { 
          name : 'suraj',  
          age : 24        
                            
      })
  })
 
  app.get('/help',(req,res) => { // access index.hsb
     res.render('help', { // first arg is name of handler ie index 
         name : 'kamath',   // 2nd arg is object ie to make the page dynamic it contains value that view can access
         age : 25          // in index.hsb instead of writting <h1> suraj</h1>
                           // we write <h1>{{ name }} <h1>
     })
 })

 app.get('/product',(req,res) => { //to send json to the browser
    if(!req.query.search){ // to make user to give search manditary
        return res.send({
            error: 'provide search '
        })
    } 
    console.log(req.query)
    res.send({
         product : [] // send empty json
     })    
 })
 app.get('/weather', (req,res) =>{ // to get the query string from browser ie to get the address searched for
     if(!req.query.address){ // setting address search as manditary
         return res.send({
             error : 'please enter'
         })
     }
     res.send({
         address : req.query.address //sending back the address searched
     })
 })

 app.get('/help/*',(req,res) => { // we created a new 404.hsb page in view and passed the value of errormsg to it
    res.render('404', { 
        name : 'suraj',  
        age : 24 ,       
        errormsg : 'help error'                  
    })
})

 app.get('*',(req,res) => { //same as above
    res.render('404', { 
        name : 'suraj',  
        age : 24 ,       
        errormsg : 'error in this page'                  
    })
})
 
  app.listen(3000)*/

  /*********************************************************************************** */
  // building json HTTP endpoint
  // combining geo and forcast code of weather app with web-server weather endpoint
  // install npm request
  // copy geo and forcast code into scr folder by creating a new folder util
  // import geo and forcast code
  // copy the calling function of geo andforecast from weather-call.js of weather

  const express = require('express')
  
 const path = require('path')
 const hbs = require('hbs') // we require it for partial
 
 const geocode = require('./util/geocode.js') // importing geocode file
 const forecast = require('./util/forecast.js') // importing forecast file
 const app = express()
 
 const publicdirectorypath = path.join(__dirname, '../public')
 const viewpath = path.join(__dirname,'../templates/views') 
 const partialpath = path.join(__dirname,'../templates/partial') // parital dir path
 
 
 app.set('view engine', 'hbs')
 app.set('views',viewpath)
 hbs.registerPartials(partialpath)// configuring partial path 
  app.use(express.static(publicdirectorypath)) // config public path 
 app.get('',(req,res) => { 
      res.render('index', { 
          name : 'suraj',  
          age : 24        
                            
      })
  })
 
  app.get('/help',(req,res) => { // access index.hsb
     res.render('help', { // first arg is name of handler ie index 
         name : 'This is a weather API',   // 2nd arg is object ie to make the page dynamic it contains value that view can access
         age : 'Enter the location in weather link'          // in index.hsb instead of writting <h1> suraj</h1>
                           // we write <h1>{{ name }} <h1>
     })
 })

 /*app.get('/product',(req,res) => { //to send json to the browser
    if(!req.query.search){ // to make user to give search manditary
        return res.send({
            error: 'provide search '
        })
    } 
    console.log(req.query)
    res.send({
         product : [] // send empty json
     })    
 })*/
 app.get('/weather', (req,res) =>{ // to get the query string from browser ie to get the address searched for
     if(!req.query.address){ // setting address search as manditary
         return res.send({
             error : 'please enter location'
         })
     }
     geocode(req.query.address,(error,{lat,long,loc} = {})=>{ // we take address given in browser by query string
                                                        // data is an object with lat long loc as property we have used destructure method over object
                                                        // we have set default value if we give address which does not match then defaul value {} will display that is the geocode error msg
        if(error)
        {
            return res.send({
                error : 'cannot find the location'
            })
        }
        forecast(lat,long,(error,fdata) =>{ // we have taken lat long as input from geocode
            if(error)
            {
                return res.send({
                    error : 'error in forecast'
                })
            }
            res.send({
                forecast : fdata,
                location : loc, // we have taken lat long as input from geocode so need to display
                address : req.query.address
            })
        })
         })
     
 })

 


 app.get('/help/*',(req,res) => { // we created a new 404.hsb page in view and passed the value of errormsg to it
    res.render('404', { 
        name : 'suraj',  
        age : 24 ,       
        errormsg : 'help error'                  
    })
})

 app.get('*',(req,res) => { //same as above
    res.render('404', { 
        name : 'suraj',  
        age : 24 ,       
        errormsg : 'error in this page'                  
    })
})
 
  app.listen(3000)
