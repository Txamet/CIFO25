let myVideo = document.getElementById("video1");

function otraAlerta() {
  window.confirm(
    "Esta ventana es un confirm. Aprieta 'Aceptar' para cerrarlo."
  );
}

function playPausa() {
  myVideo.paused ? myVideo.play() : myVideo.pause();
}

function mayor() {
  myVideo.width = 560;
}

function menor() {
  myVideo.width = 320;
}

function normal() {
  myVideo.width = 420;
}
