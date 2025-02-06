document.addEventListener("DOMContentLoaded", function () {
    let contenido = document.querySelectorAll('.contenido');
    let index = 0;
    let canScroll = true; 

    let contadorElemento = document.getElementById('contador');
    let prevBtn = document.getElementById('prev-btn');
    let nextBtn = document.getElementById('next-btn');

    contenido[index].classList.add('visible');
    contadorElemento.textContent = `${index + 1} / ${contenido.length}`;

    function actualizarContador() {
        contadorElemento.textContent = `${index + 1} / ${contenido.length}`;
    }

    function cambiarSeccion(direccion) {
        if (!canScroll) return;
        canScroll = false;

        contenido[index].classList.remove('visible');

        index += direccion;

        if (index < 0) index = 0;
        if (index >= contenido.length) index = contenido.length - 1;

        contenido[index].classList.add('visible');

        actualizarContador();

        setTimeout(() => {
            canScroll = true;
        }, 800);
    }

    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0 && index < contenido.length - 1) {
            cambiarSeccion(1);
        } else if (e.deltaY < 0 && index > 0) {
            cambiarSeccion(-1);
        }
        e.preventDefault();
    });

    prevBtn.addEventListener('click', () => cambiarSeccion(-1));
    nextBtn.addEventListener('click', () => cambiarSeccion(1));
});
