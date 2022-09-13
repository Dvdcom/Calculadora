/* tecla que ingresa */
let ingreso = "";
let num1;
let num2;
let numeros = new Array();
let codOperacion;
let resultado;

const pantalla = document.querySelector('#in-resultado');

document.addEventListener('keydown', (event) => {
    var keyValue = event.key;
    var codeValue = event.keyCode;

    /* console.log(codeValue); */
    if (codeValue >= 48 && codeValue <= 57 || codeValue >= 96 && codeValue <= 107 || codeValue >= 109 && codeValue <= 111 || codeValue == 13 || codeValue == 187 || codeValue == 190 ){
        asignar(keyValue,codeValue);
    }

}, false);

function asignar(x,y){
    /* si presiona un numero */
    if(y >= 48 && y <= 57 || y >= 96 && y <= 105 || y == 110 || y == 189 || y == 109){
        ingreso = ingreso + x; 
        pantalla.value = ingreso;

    }
    /* si presiona codigo de operacion */
    if(x == '+' || x == '*' || x == '/'){
        numeros.push(ingreso);
        ingreso = "";
        pantalla.value = x;
        codOperacion = x;
        numeros.push(codOperacion);
    }
    /* si presiona el =  */
    if( y == 187 || y == 13){
        numeros.push(ingreso);
        /* recorrer el array */
        for (i = 0; i < numeros.length; i++) {
            if(!isNAN(numeros[i])){
                console.log(numeros[i]);
            }
            /*https://www.freecodecamp.org/espanol/news/foreach-en-javascript-como-recorrer-un-arreglo-en-js/ */
            /* https://www.neoguias.com/comprobar-valor-numero-javascript/ */
        };

        switch (codOperacion){
            case '+':
                resultado = suma(num1,num2);
                break;
            case '-':
                resultado = resta(num1,num2);
                break;
            case '*':
                resultado = multiplicacion(num1,num2);
                break;
            case '/':
                resultado = division(num1,num2);
                break;
        }
        pantalla.value = resultado;
    }
    
}



/* crear la operacion */
function suma(num1,num2){
    return num1 + num2;
}
function resta(num1,num2){
    return num1 - num2;
}
function multiplicacion(num1,num2){
    return num1 * num2;
}
function division(num1,num2){
    return num1 / num2;
}

