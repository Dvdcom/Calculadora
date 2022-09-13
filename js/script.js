/* tecla que ingresa */
let ingreso = "";
let num1;
let num2;
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
        if(num1 == ""){
            num1 = parseint(pantalla.value);}
            else if(num2 == "" && num1 !== ""){ 
                num2 = parseint(pantalla.value);}
            else{ingreso = ""}
        pantalla.value = x;
        codOperacion = x;
    }
    /* si presiona el =  */
    if( y == 187 || y == 13){
        console.log('num1 = ' + num1);
        console.log('num2 = ' + num2);
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

