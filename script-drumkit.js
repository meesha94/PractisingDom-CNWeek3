const audio = document.getElementById("audio");

const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const bass = document.getElementById("bass");
const kick = document.getElementById("kick");
const crashcymbal = document.getElementById("crashcymbal");
const ridecymbal = document.getElementById("ridecymbal");
const snare = document.getElementById("snare");
const smalltom = document.getElementById("smalltom");
const mediumtom = document.getElementById("mediumtom");

clap.addEventListener("click", () => {
	audio.src = "audio/clap.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "a") {
        audio.src = "audio/clap.wav";
    };    
});


hihat.addEventListener("click", () => {
	audio.src = "audio/hihat.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "s") {
        audio.src = "audio/hihat.wav";
    };    
});

bass.addEventListener("click", () => {
	audio.src = "audio/bass.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "l") {
        audio.src = "audio/bass.wav";
    };    
});

kick.addEventListener("click", () => {
	audio.src = "audio/kick.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "d") {
        audio.src = "audio/kick.wav";
    };    
});

crashcymbal.addEventListener("click", () => {
	audio.src = "audio/crashcymbal.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "f") {
        audio.src = "audio/crashcymbal.wav";
    };    
});

ridecymbal.addEventListener("click", () => {
	audio.src = "audio/ridecymbal.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "h") {
        audio.src = "audio/ridecymbal.wav";
    };    
});

snare.addEventListener("click", () => {
	audio.src = "audio/snare.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "j") {
        audio.src = "audio/snare.wav";
    };    
});

smalltom.addEventListener("click", () => {
	audio.src = "audio/smalltom.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "k") {
        audio.src = "audio/smalltom.wav";
    };    
});

mediumtom.addEventListener("click", () => {
	audio.src = "audio/mediumtom.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "g") {
        audio.src = "audio/mediumtom.wav";
    };    
});
