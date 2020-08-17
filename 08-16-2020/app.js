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

let list =  `<ul>`;

for(var i = 0 ; i < productStock.length ; i++){
    list += `<li>Product: ${productStock[i].name}</li>`;
    list += `<li>Price: ${productStock[i].price}</li>`;
    list += `<li>Specs: ${productStock[i].specs.et} et, ${productStock[i].specs.width} inches width.</li>`;
}

list += `</ul>`


function total(number1, number2){
    return number1 + number2;
}

document.getElementById('app').innerHTML = list;
