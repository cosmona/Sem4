"use strict"
/* 
for (let horas =0; horas< 24; horas++){
	for (let minutos = 0; minutos< 60; minutos++) {
		for (let segundos = 0; segundos< 60; segundos++) {
			if (horas >= 8 && horas <= 22 && minutos === 0 && segundos === 0){
				console.log (`${horas}:${minutos}:${segundos}`);
				for (let i = 1; i <=horas; i++ ){
					console.log("Cucu");
				}
			}
		}
	}
} */



let horas = 1;


while (horas <= 24) {
	(horas >8 && horas <=23) ? (()=>{
			for (let i = 1; i <horas; i++ )
			{
				console.log("Cucu");
			}
		})()
		:;
	console.log(horas);
	horas++;
} 
