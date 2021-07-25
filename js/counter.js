if(!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}

function count(){


    let counter = localStorage.getItem('counter');
    let heading = document.querySelector('h4');
    counter++;

    heading.innerHTML = counter;
    localStorage.setItem('counter', counter);


    // alert("Counter value: " +counter);

    // if(counter % 10 == 0){
    //     alert(`Counter is now ${counter}`) 
    // template literal
    // }

    if(counter==10){
        heading.style.color = 'red';
    }else if(counter == 20){
        heading.style.color = 'blue';
    }else if(counter == 30){
        heading.style.color = 'green';
    }else{
        heading.style.color = 'black';
    }

}
function reset(){
    localStorage.setItem('counter',0);
    let heading = document.querySelector('h4');
    heading.innerHTML = localStorage.getItem('counter');
}

document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('h4').innerHTML = localStorage.getItem('counter');

    document.querySelector('#count').onclick = count;

    // setInterval(count, 1000);

    document.querySelector('#reset').onclick = reset;


    // local storage or TSQ on CICS system

    document.querySelector('form').onsubmit = function(){

        const userName = document.querySelector('#userName').value; 
        // #name is input filed in html

        if(userName === "sandeep"){
            alert(`Hello, ${userName}, your welcome to JS CS50 Youtube lesson`);
        }else if(userName === "bhargavi"){
            alert(`Hello, ${userName}, your welcome to JS CS50 Youtube lesson`); 
        }else{
            alert('Incorrect User name!');
        }

    };

});



