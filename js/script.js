//PUNTO UNO
const opciones = ['piedra', 'papel', 'tijera'];

//PUNTO DOS Y TRES
let puntosuser = 0;
let puntospc = 0;

//PUNTO CUATRO
const botones = document.querySelectorAll('.boton-jugada');
const resultDiv = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');

console.log(botones);


botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const jugadaUsuario = boton.dataset.jugada;
        const jugadaOrdenador = generarJugadaOrdenador();
        const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador);

        mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado);
        actualizarPuntuacion(resultado);
    });
});


function generarJugadaOrdenador() {
    const numeroran = Math.floor(Math.random() * opciones.length);
    return opciones[numeroran];
}

function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
    if (jugadaUsuario === jugadaOrdenador) {
        return 'empate';
    } else if (
        (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
        (jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
        (jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
    ) { 
        return 'ganaste';
    } else {
        return 'perdiste';
    }
}

function mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado) {
    resultDiv.innerHTML = `
        <p>Has elegido: ${jugadaUsuario}</p>
        <p>El ordeandor ha elegido: ${jugadaUsuario}</p>
        <p>Resultado: ${resultado}</p>
    `
        
}

function actualizarPuntuacion(resultado) {
    if (resultado === 'ganaste') {
        puntosuser++;
    }else if (resultado === 'perdiste') {
        puntospc++;
    }
    contadorUsuario.textContent = puntosuser;
    contadorOrdenador.textContent = puntospc;
}






