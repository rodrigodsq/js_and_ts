//Declaração de função (function hoisting)
falarOi();
function falarOi(){
    console.log('oie')
}

// First-class objects (Objetos de primeira classe)
//function expression
const souUmDado = function(){
    console.log('sou um dado')
}
souUmDado();

//arrow function
const funcaoArrow = () => {
    console.log('Sou um arrow function');
}
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando')
    }
};
obj.falar();