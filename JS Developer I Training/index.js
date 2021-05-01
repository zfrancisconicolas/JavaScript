function undefinedAndReferenceErrorTest(){
    console.log(name);
    console.log(age);
    
    var name = 'Anthony';
    let age = 21;

    //Error should be "undefined" and "ReferenceError"
}

function outputTest(){
    for(var i = 0 ; i < 3 ; i++){
        setTimeout(() => console.log(i), 1);
    }

    for(let i = 0 ; i < 3 ; i++){
        setTimeout(() => console.log(i), 1);
    }

    //Because of the event (setTimeout), the function is called after the loop. 
    //In the second block, because it is a let, each value is scoped inside the loop.
}

function outputTest2(){
    const shape = {
        radius: 10,
        diameter() {
            return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius
    };

    console.log(shape.diameter());
    console.log(shape.perimeter());

    //Output of perimeter() is NaN because arrow functions that use *this* refer to the surrounding scope.
}

function outputTest3(){
    console.log(+true);
    console.log(!'Anthony');

    //Output is 1 and false, the + converts to a number, and true is 1, false is 0.
    //! asks if the value is false. It's not.
}

function validityTest(){
    const bird = {
        size: 'small'
    };

    const mouse = {
        name: 'Mickey',
        small: true
    }

    console.log(mouse["bird.size"])
    //Accessing "mouse.bird.size" isn't valid since mouse doesn't have a key called "bird"
    //mouse["bird.size"] will evaluate bird.size (small), and mouse["small"] exists
}

function outputTest4(){
    let c = { greeting: 'Hey'};
    let d;
    
    d = c;

    c.greeting = 'Hello';
    console.log(d.greeting);

    //Output will be Hello, because d is a reference to c. JavaScript objects interact through reference.
}

function outputTest5(){
    let a = 3;
    let b = new Number(3);
    let c = 3;

    console.log(a == b);
    console.log(a === b);
    console.log(b === c);

    //Output is true false false because the Number() is a different object
}

function outputTest6(){
    class Chameleon {
        static colorChange(newColor){
            this.newColor = newColor;
            return this.newColor;
        }
    
        constructor({ newColor = 'green' } = {}) {
            this.newColor = newColor;
        }
    }

    const freddie = new Chameleon({ newColor: 'purple'});
    console.log(freddie.colorChange('orange'));

    //The output is TypeError because the method is static and it only lives in the constructor which it is created
}

function outputTest7(){
    let greeting;
    greetign = {}; // typo
    console.log(greetign);

    // Output will be {} because the variable was created as global
}

function outputTest8(){
    function bark(){
        console.log('Woof!');
    }

    bark.animal = 'dog';

    //Nothing happens because functions are objects
}

outputTest();
outputTest2();
outputTest3();
outputTest4();
outputTest5();
outputTest6();
outputTest7();
outputTest8();
undefinedAndReferenceErrorTest();
