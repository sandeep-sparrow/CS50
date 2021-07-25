document.addEventListener('DOMContentLoaded', function(){

    // by default the submit button should be disabled

    document.querySelector('#submit').disabled = true;

    // stop being disabled when key is pressed
    document.querySelector('#task').onkeyup = () => {

        if (document.querySelector('#task').value.length > 0){
            document.querySelector('#submit').disabled = false;
        }else{
            document.querySelector('#submit').disabled = true;
        }

    };

    document.querySelector('form').onsubmit = () => {

        const task = document.querySelector('#task').value;
        console.log(task);

        if(task!=' '){
            // create a new element
            const li = document.createElement('li');
            li.innerHTML = task;

            document.querySelector('#tasks').append(li);

            // to clear out input file #task
            document.querySelector('#task').value = '';

            // after tasks list is append, disabled the submit button again
            document.querySelector('#submit').disabled = true;
        }else{
            console.log("Task cannot be empty");
            alert("Task cannot be empty");
        }

        // stop form from submitting
        return false;
    }
});