
const conceptos = ["Igualdad", "Respeto", "Consentimiento", "Comunicación"];
let indiceActual = 1;
let bloqueandoBoton = false; 

function rotarConcepto() {
    const tarjetas = document.querySelectorAll('.tarjeta');
    const botonPrincipal = document.getElementById('btn-dinamico');
    
    // 1. Limpiar estados previos en las tarjetas y sus botones internos
    tarjetas.forEach(tarjeta => {
        tarjeta.classList.remove('seleccionada');
        const destinoBoton = tarjeta.querySelector('.destino-boton');
        if (destinoBoton) destinoBoton.innerHTML = '';
    });

    // 2. Elegir un índice al azar (0 a 3)
    const indiceAleatorio = Math.floor(Math.random() * conceptos.length);
    const palabraElegida = conceptos[indiceAleatorio];
    const tarjetaElegida = document.getElementById(`tarjeta-${indiceAleatorio}`);

    // 3. Escribir la palabra elegida en el botón principal de arriba y desactivar su click momentáneamente
    if (botonPrincipal) {
        botonPrincipal.innerText = palabraElegida;
        botonPrincipal.removeAttribute("onclick"); 
    }

    // 4. Resaltar la tarjeta seleccionada visualmente
    if (tarjetaElegida) {
        tarjetaElegida.classList.add('seleccionada');
        
        // 5. Insertar el botón "Volver" DENTRO del recuadro de la tarjeta elegida
        const destino = tarjetaElegida.querySelector('.destino-boton');
        if (destino) {
            destino.innerHTML = `<button class="btn-volver" onclick="volverInicio(event)">Volver</button>`;
        }
    }
}

function volverInicio(event) {
    // Evita activar el evento onclick propio de la tarjeta al tocar el botón "Volver"
    if (event) event.stopPropagation(); 
    
    const tarjetas = document.querySelectorAll('.tarjeta');
    const botonPrincipal = document.getElementById('btn-dinamico');
    
    // 1. Quitar el diseño resaltado de todas las tarjetas y vaciar sus botones internos
    tarjetas.forEach(tarjeta => {
        tarjeta.classList.remove('seleccionada');
        const destinoBoton = tarjeta.querySelector('.destino-boton');
        if (destinoBoton) destinoBoton.innerHTML = '';
    });

    // 2. Regresar el botón principal de arriba a su texto original "Elija una palabra"
    if (botonPrincipal) {
        botonPrincipal.innerText = "Elija una palabra";
        botonPrincipal.setAttribute("onclick", "rotarConcepto()");
    }
}

function mostrarInfo(concepto) {
    console.log('Información de: ' + concepto);
}