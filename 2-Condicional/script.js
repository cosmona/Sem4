"use strict";

let nombre = window.prompt("Como te llamas?");
let edad = window.prompt("Que edad tienes?");
if (typeof(edad === "string")){
	console.log(`${edad} no es una edad!!`);
} else {
	//manera 1
	if (+edad < 12) {
			console.log(`A ${nombre} le corresponde el descuento infantil.`);
	} else if (+edad < 30) {
		console.log(`A ${nombre} le corresponde el descuento juvenil.`);
	} else if (+edad > 60) {
		console.log(`A ${nombre} le corresponde el descuento jubilados.`);
	} else {
		console.log(`A ${nombre}  no le corresponde ningun descuento.`);
	}
	//manera 2
	if (+edad < 12) {
		//descuento infantil
		console.log(`A ${nombre} le corresponde el descuento infantil.`);
	} else if (+edad >= 12 && +edad < 30 ) {
		//sin descuento
		console.log(`A ${nombre} le corresponde el descuento juvenil.`);
	} else if (+edad > 60) {
		//jubilados
		console.log(`A ${nombre} le corresponde el descuento jubilados.`);
	} else{
		console.log(`A ${nombre}  no le corresponde ningun descuento.`);
	} 
}
