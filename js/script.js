/* variables principales */
let ingreso = "";
let resultado = 0;
let seDioResultado = false;
let numeros = new Array();

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
    /* si presiona codigo de operacion ( + - * / ) */
    if (x == '+' || x == '-' || x == '*' || x == '/') {

        /* consulto si tengo o no un resultado anterior dado */
        if (!seDioResultado) { numeros.push(parseInt(pantalla.value)); }
        /* RESETEO A NADA LA VARIABLE INGRESO */
        ingreso = "";
        /* MUESTRO EN PANTALLA LA OPERACION QUE QUIERO REALIZAR  */
        pantalla.value = x;
        /* GUARDO EN EL ARREGLO NUMEROS COMO UN STRING */
        numeros.push(String(x));
        seDioResultado = false
    }

    /* si presiona el = o enter indicando que quiero un resultado */
    if (y == 187 || y == 13) {

        /* GUARDO EL SEGUNDO NUMERO INGRESADO DENTRO DEL ARREGLO */
        numeros.push(parseInt(ingreso));

        /* DECLARO UN ARREGLO PARA REALIZAR UNA OPERACION */
        let operacion = new Array();

        /* RECORRO EL ARREGLO NUMEROS PARA DAR CON LOS RESULTADOS */
        numeros.forEach((numero) => {

            operacion.push(numero);

            /* SOLO VA A ENTRAR EN ESTE IF CUANDO EL PRIMER NUMERO Y EL SEGUNDO NUMERO SE INGRESEN (ES DECIR PARA ESTE ENTONCES LAS 3 PRIMERAS POSICIONES SE LLENARON) */
            if (operacion[0] > 0 && operacion[2] > 0) {

                /* console.log de testeo */
                /* console.log('num1 es = ' + operacion[0] + ' num2 es = ' + operacion[2] + ' codOperacion es = ' + operacion[1]); */

                /* REALIZO LA OPERACION ENTREGANDO TODO LOS 3 DATOS */ /* utilizar un arreglo para guardar funciones */
                switch (operacion[1]) {
                    case '+':
                        resultado = suma(operacion[0], operacion[2]);
                        break;
                    case '-':
                        resultado = resta(operacion[0], operacion[2]);
                        break;
                    case '*':
                        resultado = multiplicacion(operacion[0], operacion[2]);
                        break;
                    case '/':
                        resultado = division(operacion[0], operacion[2]);
                        break;
                }

                if (numeros.length > 3) {
                    operacion = [];
                    operacion.push(resultado)
                }
            }
        });
        /* doy un resultado en pantalla y cambio el boolean a verdadero */
        pantalla.value = resultado;
        seDioResultado = true;
    };

    /* cuando se preciona la tecla BORRAR */
    if (y == 8) {
        pantalla.value = "";
        ingreso = "";
        numeros = [];
        resultado = "";
        seDioResultado = false;
    }
}


/* crear la operacion funciones flecha*/
function suma(num1, num2) {
    return num1 + num2;
}
function resta(num1, num2) {
    return num1 - num2;
}
function multiplicacion(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}

function esImpar(x) {
    return (x % 2 == 0) ? true : false;
}

function simulaIngreso(tecla, codigo) {
    asignar(tecla, codigo);
}