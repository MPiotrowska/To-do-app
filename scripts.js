//variables

let listHasTodos = false;

const todos = document.getElementById('todos');

const input = document.getElementById('input');

const button = document.getElementById('button');

const message = document.getElementById('message');


//functions

function addTodos() {
    // save user input
    const userInput = event.target.value;
    // add html with user input
    const listItem = `<li>${userInput}</li>`;
    // append to the page
    todos.insertAdjacentHTML('beforeend', listItem);
    //clear input so user doens't need to do it
    event.target.value = '';
    // set listHasTodos to be true
    listHasTodos = true;

    // if the are todos hide the initial message
    if (listHasTodos === true) {
        message.classList.add('hidden')
    }
}


// Listen for change event
input.addEventListener('change', addTodos);



