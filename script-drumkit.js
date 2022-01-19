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


document.addEventListener("keyup", () => {
	clap.style.backgroundColor = "#363B5E";
	hihat.style.backgroundColor = "#363B5E";
	bass.style.backgroundColor = "#363B5E";
	kick.style.backgroundColor = "#363B5E";
	crashcymbal.style.backgroundColor = "#363B5E";
	ridecymbal.style.backgroundColor = "#363B5E";
	snare.style.backgroundColor = "#363B5E";
	smalltom.style.backgroundColor = "#363B5E";
	mediumtom.style.backgroundColor = "#363B5E";
})

clap.addEventListener("click", () => {
	audio.src = "audio/clap.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "a") {
        audio.src = "audio/clap.wav";
        clap.style.backgroundColor = "#4C569F";
    };    
});


hihat.addEventListener("click", () => {
	audio.src = "audio/hihat.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "s") {
        audio.src = "audio/hihat.wav";
        hihat.style.backgroundColor = "#4C569F";
    };    
});

bass.addEventListener("click", () => {
	audio.src = "audio/bass.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "l") {
        audio.src = "audio/bass.wav";
        bass.style.backgroundColor = "#4C569F";
    };    
});

kick.addEventListener("click", () => {
	audio.src = "audio/kick.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "d") {
        audio.src = "audio/kick.wav";
        kick.style.backgroundColor = "#4C569F";
    };    
});

crashcymbal.addEventListener("click", () => {
	audio.src = "audio/crashcymbal.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "f") {
        audio.src = "audio/crashcymbal.wav";
        crashcymbal.style.backgroundColor = "#4C569F";
    };    
});

ridecymbal.addEventListener("click", () => {
	audio.src = "audio/ridecymbal.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "h") {
        audio.src = "audio/ridecymbal.wav";
        ridecymbal.style.backgroundColor = "#4C569F";
    };    
});

snare.addEventListener("click", () => {
	audio.src = "audio/snare.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "j") {
        audio.src = "audio/snare.wav";
        snare.style.backgroundColor = "#4C569F";
    };    
});

smalltom.addEventListener("click", () => {
	audio.src = "audio/smalltom.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "k") {
        audio.src = "audio/smalltom.wav";
        smalltom.style.backgroundColor = "#4C569F";
    };    
});

mediumtom.addEventListener("click", () => {
	audio.src = "audio/mediumtom.wav";
});
document.addEventListener("keypress", (e) => {
    if (e.key == "g") {
        audio.src = "audio/mediumtom.wav";
        mediumtom.style.backgroundColor = "#4C569F";
    };    
});
