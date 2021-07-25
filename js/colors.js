document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('select').onchange = function() {
        document.querySelector('#hello').style.color = this.value;
        // this is special event that always referred to selected options
    };

    // change color to red
    // document.querySelector('#red').onclick = function(){
    //     document.querySelector('#hello').style.color = 'red';
    // }

    // document.querySelector('#blue').onclick = function(){
    //     document.querySelector('#hello').style.color = 'blue';
    // }

    // document.querySelector('#green').onclick = function(){
    //     document.querySelector('#hello').style.color = 'green';
    // }

    // gets multiple elements

    document.querySelectorAll('button').forEach(button =>{
        button.onclick = function(){
            document.querySelector('#hello').style.color = button.dataset.color;
        }
    });
    // looking for all of the button
    // return js array - list of elements 
    // node list
    // loop over all the button

})