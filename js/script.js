/* variables principales */
let ingreso = "";

const pantalla = document.querySelector('#in-resultado');

document.addEventListener('keydown', (event) => {
    var keyValue = event.key;
    var codeValue = event.keyCode;

    console.log(codeValue + " " + keyValue);
    if (codeValue == 8 || codeValue >= 48 && codeValue <= 57 || codeValue >= 96 && codeValue <= 107 || codeValue >= 109 && codeValue <= 111 || codeValue == 13 || codeValue == 187 || codeValue == 190) {
        asignar(keyValue, codeValue);
    }

}, false);

/* Calculadora basada en ingreso de teclado */
function asignar(x, y) {
    /* si presiona un numero */
    if (y >= 48 && y <= 57 || y >= 96 && y <= 105 || y == 110) {
        /* CONCATENO ENTRADA Y LA MUESTRO EN PANTALLA */
        ingreso = ingreso + x;
        pantalla.value = ingreso;
    }
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


function esImpar(x) {
    return (x % 2 == 0) ? true : false;
}

function simulaIngreso(tecla, codigo) {
    asignar(tecla, codigo);
}