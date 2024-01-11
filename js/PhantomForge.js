// script.js

// Wacht tot het DOM (Document Object Model) is geladen
document.addEventListener("DOMContentLoaded", function() {
    // Zoek de knop op basis van het id-attribuut
    var discord = document.getElementById("discord");

    // Voeg een click-eventlistener toe aan de knop
    discord.addEventListener("click", function() {
        // Navigeer naar de gewenste website
        window.location.href = "https://discord.gg/4fTFXz5W";
    });
});
