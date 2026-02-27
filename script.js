document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const music = document.getElementById('music');
    let isOpen = false;
    
    envelope.addEventListener('click', function() {
        if (!isOpen) {
            envelope.classList.add('open');
            music.play().catch(e => console.log('Autoplay bloqueado:', e));
            isOpen = true;
        }
    });
});