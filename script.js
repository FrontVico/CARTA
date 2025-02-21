document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("envelope");
    const music = document.getElementById("music");
    
    envelope.addEventListener("click", function() {
        this.classList.toggle("open");
        if (this.classList.contains("open")) {
            music.play().catch(error => console.error("Error al reproducir la música", error));
        } else {
            music.pause();
            music.currentTime = 0;
        }
    });
});