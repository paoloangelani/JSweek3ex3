window.onload = () => {
    setTimeout(incrementoContatore, 1000);
};



const contatore = document.getElementById("time");
let tempoContatore =
    parseInt(sessionStorage.getItem("cronometro")) || 0;

const assegnazioneContatore = function () {
    contatore.innerText = tempoContatore;
};


assegnazioneContatore();

const incrementoContatore = function () {
    tempoContatore = tempoContatore + 1;
    assegnazioneContatore();
    sessionStorage.setItem("cronometro", tempoContatore);
    setTimeout(incrementoContatore, 1000);
};