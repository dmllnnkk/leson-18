const button = document. body. querySelector( '#button');

const butoonBox = document. body.querySelector ('#button-box');

const handleClick = function () {
   console. log(' document. body. classList', document.body.lassList) 
   document. body.classList
}

button.addEventListener('click', handleClick)

alert(handleClick)

const input = document. body.querySelector ('#input');

const handleInput = function (e) {
console. log (e.target .value);
document.body. append (e. target. value)
}
input. addEventListener ('change', handleInput) ;
