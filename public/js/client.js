// this page is used to get the address from browser and give result to browser page
/*console.log('this is client side script')
fetch('http://localhost:3000/weather?address=austin').then((response) =>{ //http request from client to browser is done by fetch method
                                                        // here the data is fetched and THEN the below json funtion runs
response.json().then((data) =>{ // json is a function data we get here is parsed data
        if(data.error)
        {
            console.log(data.error) // the parsed data is from /weather handler were we have error loc and fdata output 
        }
        else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})*/
/************************************************************************************************* */
// now taking the input from form code of index.hbs
// we take the input from user given in his search
/*const forminput = document.querySelector('form') // select the input from form // form is name given in index.hbs
const searchinput = document.querySelector('input') // same as above

forminput.addEventListener('submit' ,(e) => { //listening to button and preventing auto refresh by preventdefault method
    e.preventDefault()
// now we have access to search(by queryselector) we can use its value when button is clicked as we are listening to button
const location = searchinput.value //input given in search


// now copy paste the fetch code to get the forecast

fetch('http://localhost:3000/weather?address=' + location).then((response) =>{ // instead of giving hardcode value we take thevalue given in search
                                                        // here the data is fetched and THEN the below json funtion runs
response.json().then((data) =>{ // json is a function data we get here is parsed data
        if(data.error)
        {
            console.log(data.error) // the parsed data is from /weather handler were we have error loc and fdata output 
        }
        else{
            console.log(data.location) // we should use the property name and not its value location : loc from /weather
            console.log(data.forecast)
        }
    })
})
})*/
 
/******************************************************************************************************************** */
// User interface
// here we place the output in users browser applet and not in developers tool


const forminput = document.querySelector('form') 
const searchinput = document.querySelector('input') 

const message1 = document.querySelector('#msg1') // taking input from <p> tag with its id name so we used #
const message2 = document.querySelector('#msg2')

// now that we used <p> tag index.hbs and taking its input we can now target its input value
//message1.textContent='suraj' // textcontent is to change to text

forminput.addEventListener('submit' ,(e) => { 
    e.preventDefault()
const location = searchinput.value 

message1.textContent='loading' // just printing loading
message2.textContent='' // printing nothing 

fetch('http://localhost:3000/weather?address=' + location).then((response) =>{ 
                                                        
response.json().then((data) =>{ 
        if(data.error)
        {
            message1.textContent=data.error // printing the error in <p> tag of user applet 
        }
        else{
            message1.textContent=data.location
            message2.textContent=data.forecast
        }
    })
})
})
 
