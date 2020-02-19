//variables

var todos = document.getElementById('todos');

var input = document.getElementById('input');

var button = document.getElementById('button');




//functions

function addTodos() {
    // save user input
    var userInput = event.target.value;
    // add html with user input
    var listItem = `<li>${userInput}</li>`;
    // append to the page
    todos.insertAdjacentHTML('beforeend', listItem);
    //clear input so user doens't need to do it
    event.target.value = ''
}


// Listen for change event
input.addEventListener('change', addTodos);
