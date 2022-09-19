/* variables principales */
let ingreso = "";
let arrayIngreso = [];
const separacion = ['(',')','+','-','*','/','%','sin','cos','Enter','=','tg'];
let numeros = [];
const fMatematicasUbicaciones = ['+','-','*','/',];
let resultado;

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
        
    }
    
}, false);

/* Calculadora basada en ingreso de teclado */
function separarYasignar() {

var numeroConcatenado = "";

    arrayIngreso.forEach((element,index) => {

        if(element >= 0 && element <= 9){
            numeroConcatenado = numeroConcatenado + element;
        }
        if(separacion.indexOf(element)>0){
            if(index == 0){
                numeros.push(element);
            }
            if (index != 0){
                numeros.push(parseInt(numeroConcatenado));
                numeroConcatenado = "";
                numeros.push(element);
                vaciarInput();
            }
        }

    });
    operar(numeros);
}

function operar(){

    var i;
    var num1 = 0;
    var num2 = 0;
    var operador;

    numeros.forEach(element => {
        if(separacion.includes(element) && element != 'Enter'){
            operador = element
        }else{
            if(num1 == 0){
                num1 = element;
            }else if(num1 != 0 && num2 == 0 ){
                num2 = element;
            }
        }

    });

    fMatematicasUbicaciones.forEach((ele,index) => {

        if(operador == ele){

            i = index
            funcionesMatematicas.forEach((funciones,index) => {
                if (i == index){
                    resultado =  funciones(num1,num2);
                }
            });
            
        }
    });
    darResultado(resultado);
}
/* Array de funciones */
function darResultado(solucion){
    pantalla.value = solucion;
    numeros = [];
    ingreso = solucion;
    arrayIngreso = [];

    for (let i = 0; i < solucion.length; i++) {
        arrayIngreso.push(solucion[i]);
    }
    
}

const funcionesMatematicas = [
    /* Operaciones basicas */
    (num1,num2) => num1 + num2,
    (num1,num2) => num1 - num2,
    (num1,num2) => num1 * num2,
    (num1,num2) => num1 / num2,
];

function vaciarInput(){
    pantalla.value = "";
}

function esImpar(x) {
    return (x % 2 == 0) ? true : false;
}

function simulaIngreso(tecla, codigo) {
    asignar(tecla, codigo);
}