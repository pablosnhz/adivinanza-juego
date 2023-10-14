// numero al azar
let numAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

//bottom check
function chequearResultado(){
    intentos ++ 
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un numero valido entre 1 y 100'
        mensaje.style.color = 'black'
        return
    }

    if(numeroIngresado === numAzar){
        mensaje.textContent = "Felicitaciones! Adivinaste el numero!";
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    } else if(numeroIngresado < numAzar){
        mensaje.textContent = "Mas alto! El numero es mayor";
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = "Mas bajo! El numero es menor";
        mensaje.style.color = 'red';
    }
}
