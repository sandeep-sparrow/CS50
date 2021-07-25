function hello()
{
    // alert("Hello there!");
    let heading = document.querySelector('h1');
    if(heading.innerHTML === 'Hello!'){
        heading.innerHTML = 'Welcome to Web Development';
    }else if(heading.innerHTML === 'Good bye!'){
        heading.innerHTML = 'You are logged off';
    }else{
        heading.innerHTML = 'Good bye!';
    }
    
}
function login()
{
    let heading = document.querySelector('h1');
    if(heading.innerHTML === 'Good bye!'){
        heading.innerHTML = 'Welcome Back!';
    }else if(heading.innerHTML === 'Hello!'){
        heading.innerHTML = 'Welcome to Web Development';
    }else{
        heading.innerHTML = 'You are already logged in';
    }
}