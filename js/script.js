/* variables principales */
let ingreso = "";
let arrayIngreso = [];
const separacion = ['(',')','+','-','*','/','%','sin','cos','Enter','=','tg'];
let numeros = [];
const fMatematicasUbicaciones = ['+','-','*','/',];
let resultado;

const pantalla = document.querySelector('#in-resultado');

const funcionesMath = [
    {tipo: suma,
    id:'+',
    operacion: (num1,num2) => num1 + num2},
    {tipo: resta,
    id:'-',
    operacion: (num1,num2) => num1 - num2},
    {tipo: multiplicar,
    id:'*',
    operacion: (num1,num2) => num1 * num2},
    {tipo: dvidir,
    id:'/',
    operacion: (num1,num2) => num1 / num2},
    {tipo: seno,
    id:'sin',
    operacion: (num1) => Math.asin(num1)},
    {tipo: coseno,
    id:'cos',
    operacion: (num1) => Math.acos(num1)},
    {tipo: tangente,
    id:'tg',
    operacion: (num1) => Math.atan(num1)},
    {tipo: logartimo,
    id:'log',
    operacion: (num1) => Math.log(num1)},
    {tipo: raiz_2,
    id:'²√',
    operacion: (num1) => Math.sqrt(num1)},
    {tipo: raiz_3,
    id:'³√',
    operacion: (num1) => Math.cbrt(num1)},
    {tipo: raiz_n,
    id:'ⁿ√',
    /*falta funcion javascript*/
    operacion: (num1,num2) => num1 + num2},
    {tipo: exponente_2,
    id:'X²',
    operacion: (num1) => Math.pow(num1,2)},
    {tipo: exponente_3,
    id:'X³',
    operacion: (num1) => Math.pow(num1,3)},
    {tipo: exponente_n,
    id:'Xⁿ',
    operacion: (num1,num2) => Math.pow(num1,num2)},
    {tipo: e,
    id:'e',
    operacion: () => Math.E},
    {tipo: logaritmo_neperiano,
    id:'Ln',
    operacion: (num1) => Math.pow(-10,7)*Mat.log(num1/Math.pow(-10,7))},
    {tipo: Porcentaje,
        id:'%',
        /*falta funcion javascript*/
        operacion: (num1,num2) => num1 + num2},
    {tipo: X,
        id:'X!',
        /*falta funcion javascript*/
        operacion: (num1,num2) => num1 + num2}];

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