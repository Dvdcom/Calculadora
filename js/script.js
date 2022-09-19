/* variables principales */
let ingreso = "";
let arrayIngreso = [];
const separacion = ['(',')','+','-','*','/','%','sin','cos','Enter','=','tg'];
let numeros = [];

const pantalla = document.querySelector('#in-resultado');

document.addEventListener('keydown', (event) => {
    var keyValue = event.key;
    var codeValue = event.keyCode;

    /* console.log('el codigo de tecla es : '+ codeValue + " el valor de la tecla es : " + keyValue); */
    if (codeValue == 8 || (codeValue >= 48 && codeValue <= 57) || (codeValue >= 96 && codeValue <= 107) || (codeValue >= 109 && codeValue <= 111) || (codeValue == 187 && keyValue != '=') || codeValue == 190) {
        arrayIngreso.push(keyValue);

        ingreso = ingreso + keyValue;
        pantalla.value = ingreso;

    }else if(codeValue == 13 || (codeValue == 187 && keyValue == '=')){
        
        arrayIngreso.push(keyValue);
        separarYasignar(arrayIngreso);
    }else{
        
    }
    
}, false);

/* Calculadora basada en ingreso de teclado */
function separarYasignar() {
console.log(arrayIngreso);
var numeroConcatenado = "";

    arrayIngreso.forEach((element,index) => {

        if(element >= 0 && element <= 9){
            numeroConcatenado = numeroConcatenado + element;
        }
        if(separacion.indexOf(element)>0){
            if(index == 0){
                console.log('ingreso por aca')
                numeros.push(element);
            }
            if (index != 0){
                numeros.push(numeroConcatenado);
                numeroConcatenado = "";
                numeros.push(element);
                vaciarInput();
            }
        }

    });
    operar(numeros);
    console.log(numeros);
}

let resultado;
function operar(){

    funcionesMatematicas.forEach((funcion,index) => {
        if(index == operacion){
            varRespuesta = funcion(var1,var2);
        }
    });

}
/* Array de funciones */

const funcionesMatematicas = [
    /* Operaciones basicas */
    (num1,num2) => num1 + num2,
    (num1,num2) => num1 - num2,
    (num1,num2) => num1 * num2,
    (num1,num2) => num1 / num2,
];

/* funcionesMatematicas.forEach((funcion,index) => {
    if(index == operacion){
        varRespuesta = funcion(var1,var2);
    }
}); */


function vaciarInput(){
    pantalla.value = "";
}

function esImpar(x) {
    return (x % 2 == 0) ? true : false;
}

function simulaIngreso(tecla, codigo) {
    asignar(tecla, codigo);
}