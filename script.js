let diccionario = ["MIEDO", "HUESO", "CORTE", "POLLO", "YERBA", "TEXTO"]

let jugadas = 6
let verde= "#A7C957"
let amarillo = "#F7D002"
let gris = "#989788"

const button = document.getElementById("guess-button")
button.addEventListener("click", intentar)

function obtenerPalabra (){
let aleatorio = Math.floor(Math.random()*diccionario.length) //generara un numero entero entre 0 y 7
return diccionario[aleatorio]
}
let palabraSecreta = obtenerPalabra()

function intentar(){
    const INTENTO = document.getElementById("guess-input").value.toUpperCase()
    jugadas--
    //if para ver si perdimos
    if (jugadas == 0){
       terminar("PERDISTE 😖")
    }
     //if para ver si ganamos
    if (palabraSecreta == INTENTO){
        terminar("GANASTE 😀")
    }
     //algoritmo para mostrar letras
    let fila =document.createElement("div")
    fila.className="row"
    for(const i in INTENTO){
        let letra =document.createElement("span")
        letra.className = "letter"
        letra.innerText = INTENTO[i]
        fila.appendChild(letra)
        if (INTENTO[i]== palabraSecreta[i]){
            letra.style.background = verde
        } else if (palabraSecreta.includes(INTENTO[i])){
            letra.style.background = amarillo
        } else{
            letra.style.background = gris
        }
    }
    let grilla = document.getElementById("grid")
    grilla.appendChild(fila) 
}

function terminar (mensaje){
    let p= document.getElementById("guesses")
    const INPUT = document.getElementById("guess-input")
    INPUT.disabled = true;
    button.disabled = true;
    p.innerHTML = "<h1>" + mensaje + "</h1>" 
}

