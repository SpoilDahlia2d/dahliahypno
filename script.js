// Aggiungi vibrazione su click (funziona su dispositivi mobili)
document.body.addEventListener("click", function() {
    navigator.vibrate([100, 100, 100]);  // Vibrazione breve
});
