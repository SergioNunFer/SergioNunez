document.addEventListener("DOMContentLoaded", function () {
    let contenido = document.querySelectorAll('.contenido');
    let index = 0;
    let canScroll = true; // Variable de control para evitar scroll rápido

    // Seleccionar el contador y los botones
    let contadorElemento = document.getElementById('contador');
    let prevBtn = document.getElementById('prev-btn');
    let nextBtn = document.getElementById('next-btn');

    // Inicialmente solo el primer bloque es visible
    contenido[index].classList.add('visible');
    contadorElemento.textContent = `${index + 1} / ${contenido.length}`;

    function actualizarContador() {
        contadorElemento.textContent = `${index + 1} / ${contenido.length}`;
    }

    function cambiarSeccion(direccion) {
        if (!canScroll) return;
        canScroll = false;

        // Ocultar la sección actual
        contenido[index].classList.remove('visible');

        // Cambiar de índice
        index += direccion;

        // Asegurar que el índice se mantenga dentro del rango
        if (index < 0) index = 0;
        if (index >= contenido.length) index = contenido.length - 1;

        // Mostrar la nueva sección
        contenido[index].classList.add('visible');

        // Actualizar contador
        actualizarContador();

        // Control de tiempo entre cambios
        setTimeout(() => {
            canScroll = true;
        }, 800);
    }

    // Evento de scroll del ratón
    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0 && index < contenido.length - 1) {
            cambiarSeccion(1);
        } else if (e.deltaY < 0 && index > 0) {
            cambiarSeccion(-1);
        }
        e.preventDefault();
    });

    // Eventos de los botones
    prevBtn.addEventListener('click', () => cambiarSeccion(-1));
    nextBtn.addEventListener('click', () => cambiarSeccion(1));
});
