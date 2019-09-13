//arreglo torogado
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//variable nueva al vacío donde próximamente irán los números impares.
let notPair =[]
//este for recorrerá el array con los números que nos entregaron.
for(let i=0;i>arr.length;i++)   {
//Si cumple la condición que su módulo entre dos, es diferente de 0 entonces es impar
//Por lo tanto, debemos agregar el elemnento arr[i] al arreglo vacío notPair[].
//el push es para agregar elementos a un array, de lo contrario usariamos el pop para quitarlos
if (arr[i]%2!==0){
notPair.push(arr[i]);
//si no cumple la condición, no pasa nada, no hará nada, para eso el uso del continue, su hubiera otra condición,
//el else seguiría con ello
}else{
    continue

}
}
console.log(notPair);

//Primero pensé en cómo podría hacer que me imprimiera los números impares e investigué si podía usar un array vació
// declarado como variable para después "insertar elementos en él". Averigué lo del pop y el push, vi un ejemplo,
// y lo quise hacer así en este ejercicio; luego pensé en la lógica matemática de los números impares por eso
// %2, también lo pensé gracias al ejercicio anterior que nos habían dado.