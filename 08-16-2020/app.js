//IIFE
(function() {
    console.log('Welcome!');
}());

const koseiWheels = {
    name : 'Kosei',
    price : 500,
    specs: {
        et: 58,
        width : 8
    }
};

const volkWheels = {
    name : 'Volk',
    price : 400,
    specs: {
        et: 34,
        width : 8.5
    }
};

const subaruWheels = {
    name : 'Subaru',
    price : 200,
    specs: {
        et: 44,
        width : 7
    }
};

const productStock = new Array(koseiWheels, volkWheels, subaruWheels);
const tyres = ['225/45/17', '215/45/17', '235/35/18'];


let wheelList =  `<ul>`;
//Iterating them with forEach
productStock.forEach(function(product){
    wheelList += `<li>Product: ${product.name}</li>`;
    wheelList += `<li>Price: ${product.price}</li>`;
    wheelList += `<li>Specs: ${product.specs.et} et, ${product.specs.width} inches width.</li>`;
});
wheelList += `</ul>`

let tyreList =  `<ul>`;
//Iterating them with of values
for(let tyre of tyres.values()){
    tyreList += `<li>Tyre Size: ${tyre}</li>`;
}
tyreList += `</ul>`


function total(number1, number2){
    return number1 + number2;
}

document.getElementById('wheels').innerHTML = wheelList;
document.getElementById('tyres').innerHTML = tyreList;
