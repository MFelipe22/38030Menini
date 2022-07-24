let codigo_explosivo = 1234 
const numero_intentos = 3
let contador = 0

alert("Ejercicio de ciclo FOR. \nUnicamente con el codigo correcto podras desactivar el Explosivo.")

for (let index = 0; index < numero_intentos; index++) {
    
    let clave_ingresada = parseInt(prompt("Ingrese la Clave"))

    if (clave_ingresada == codigo_explosivo && contador <= numero_intentos) {
        alert("Felicidades, desactivo el explosivo!")
        break
    } contador ++
     alert("Te quedan " + (numero_intentos - contador) + " intentos")
    if (contador >= numero_intentos) {
        alert("BOOOOOOOOOOOOOM")
    }
        
      
    } 




