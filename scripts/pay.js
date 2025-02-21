document.addEventListener("DOMContentLoaded", () => {
    const nombre_tarjeta = document.getElementById("nombre_tarjeta");
    const pagar = document.getElementById("pagar");
    const div = document.getElementById("mensaje_error");
    // Creamos el mensaje de error solo una vez
    const mensaje_error = document.createElement("p");
    mensaje_error.textContent = "El campo nombre es obligatorio";
    mensaje_error.style.color = "red";
    mensaje_error.style.display = "none"; // Lo ocultamos inicialmente
    div.appendChild(mensaje_error); // Lo agregamos al DOM
    const numeros_tarjeta = document.getElementById("numeros") //numeros de la tarjeta
    if (pagar) {
        pagar.addEventListener("click", (event) => {
            if (nombre_tarjeta.value.trim() === "") {
                mensaje_error.style.display = "block"; // Mostramos el mensaje
            } else {
                mensaje_error.style.display = "none"; // Ocultamos el mensaje
            }
            //validando datos de los numeros
            const string = numeros_tarjeta.string()
            let contador = 0
            for(i=0;i<string.length;i++){
                contador++
            }if(contador<13){
                console.log("la tarjeta tiene que tener al menos 13 numeros")
            }
        });
    } else {
        console.log("No se encuentra el botón de pagar");
    }
}); //cambios random

//../app.html