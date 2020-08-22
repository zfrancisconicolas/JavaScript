// Eliminar de Local Storage
localStorage.clear();

let element;

element = document;

element = document.body;

console.log("Getting the html body", element);

element = document.getElementsByTagName("th");

console.log("Headers from the cart:");

for(let i = 0 ; i < element.length ; i++){
    console.log(element[i].innerHTML);
}

element = document.URL;

console.log("Page URL: ", element);

element = document;

console.log("Changing the form language", element.getElementById("buscador"));

if(element){
    element.getElementById("buscador").placeholder = 'What would you like to learn?';
}
