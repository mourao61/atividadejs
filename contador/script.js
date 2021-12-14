import Countdown from "./countdown.js";

const tempoincio = new Countdown("31 December 2021 20:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoincio.total[index]
    });
}

mostrarTempo();
setInterval(mostrarTempo, 1000);

