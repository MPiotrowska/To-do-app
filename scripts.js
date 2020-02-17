//variables

var todos = document.getElementById('todos');

var input = document.getElementById('input');

var button = document.getElementById('button');


//functions

function inputChange(event) {
    console.log(event)
}

input.addEventListener('change', inputChange)