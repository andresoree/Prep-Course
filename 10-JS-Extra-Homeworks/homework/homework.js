// No cambies los nombres de las funciones.

const { forEach } = require("../../07-JS-VI/homework/homework");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz1=[];
  for(var clave in objeto){
    matriz1.push([clave,objeto[clave]]);
  }
  return matriz1;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for(var i=0;i<string.length;i++){
    if(objeto.hasOwnProperty(string[i])){
      objeto[string[i]]+=1;
    }
    else{
      objeto[string[i]]=1;
    }
  }
  console.log(objeto);
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var array1="",array2="";
  for(var i = 0; i<s.length ; i++ ){
    if(s[i]===s[i].toUpperCase()){
      array1+=s[i];
    }
    else{
      array2+=s[i];
    }
  }
  return array1 + array2;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  /*
  var arrayFrase=[],str1='';
  var frase=function(){};
  
  for(var i=0; i<str.length; i++){
    if(str[i]!==" ")
      frase+=str[i];
    else {
      arrayFrase.push();
      frase="";
    }
    if(i===str.length-1){
      arrayFrase.push();
      frase="";
    }
    str1=
    return str1;
  }*/
  var frase=str.split(' ').map(function(elemento){
    return elemento.split('').reverse().join('');
  })
 return frase.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var j=numero.toString().length-1,cont=0;
  var numero1=numero.toString().split("");
  
  for(var i=0;i<numero.toString().length;i++){ 
    if(numero1[i]===numero1[j]){
      cont+=1;
    }
    j--;
  }
  if(cont===numero.toString().length){
    return "Es capicua";
  }
  else
    return "No es capicua";

  /*
  var numstring=numero.toString();
                123321    "123321"
	var resultado=numstring.split('').reverse().join("");
                "123321"   [1,2,3,3,2,1]   [1,2,3,3,2,1]   "123321" 
  if(numstring===resultado){
    return "Es capicua";
  }
  else
    return "No es capicua";*/
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaArray=cadena.split(''),newArray=[];
  for(var i=0;i<cadenaArray.length;i++){
    if (cadenaArray[i] ==='a' || cadenaArray[i] ==='b' || cadenaArray[i] ==='c'){
      continue;
    }
    else {
      newArray.push(cadenaArray[i]);
    } 
  }
  return newArray.join("");
  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var menor,palabra="",i=0;
  arraySort=arr.map(function(elemento){
    return elemento.length;
  })
  do{
    if(arraySort[i]>arraySort[i+1]){
    	menor=arraySort[i];
      arraySort[i]=arraySort[i+1];
      arraySort[i+1]=menor;
      palabra=arr[i];
      arr[i]=arr[i+1];
      arr[i+1]=palabra;
      i=0;
    }
    else{
      i++;
    }
  }while(i<arraySort.length);
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var interseccion=[];
    for(var i=0;i<arreglo1.length;i++){
      for(var j=0;j<arreglo2.length;j++)
        if(arreglo1[i]===arreglo2[j]){
          interseccion.push(arreglo2[j]);
        }
    }
  if(interseccion.length!==0)
    return interseccion;
  else
    return [];
 }



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

