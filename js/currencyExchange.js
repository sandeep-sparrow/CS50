document.addEventListener('DOMContentLoaded', function(){

    // by default the submit button should be disabled

    document.querySelector('#submit').disabled = true;

    // stop being disabled when key is pressed
    document.querySelector('#amount').onkeyup = () => {

        if (document.querySelector('#amount').value.length > 0){
            document.querySelector('#submit').disabled = false;
        }else{
            document.querySelector('#submit').disabled = true;
        }

    };

    document.querySelector('form').onsubmit = () => {

        // asking for additional information from external server
        // a promise is send back

        const URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=666b8ecb53b88ca4480a9aabc00327d6&format=1';
        
        fetch(URL)
        // convert the response to JSON format
        // JSON = java script object notation
        .then(Response => Response.json())
        .then(data => {

            const currency = document.querySelector('#currency').value.toUpperCase();
            const rateINR = data.rates[currency];

            // localStorage.setItem('rateINR', rateINR);
            // localStorage.setItem('currency', currency);
            // using template string

            if(rateINR !== undefined){
                document.querySelector('#curRate').innerHTML = `1 EUR is ${rateINR.toFixed(3)} ${currency}`;
                let amount = document.querySelector('#amount').value;
    
                let totalAmount = amount * rateINR;
                // let currency = localStorage.getItem('currency');
        
                document.querySelector('#result').innerHTML = 
                `Total Amount of ${amount} EUR is ${totalAmount.toFixed(3)} ${currency}`;
    
                document.querySelector('#submit').disabled = true;
        
                // to clear out input file #task
                document.querySelector('#amount').value = '';
                document.querySelector('#currency').value = currency.toUpperCase();
            }else{
                document.querySelector('#curRate').innerHTML = "Invalid currency";
                document.querySelector('#result').innerHTML = "Invalid currency";
                document.querySelector('#currency').value = currency.toUpperCase();
            }

        })
        .catch(error => {
            console.log("Error:", error);
        });

        return false;
    }; 

})



