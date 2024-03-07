// script.jsVoodoo

// Wacht tot het DOM (Document Object Model) is geladen
document.addEventListener("DOMContentLoaded", function() {
    // Zoek de knop op basis van het id-attribuut
    var discord = document.getElementById("discord");

    // Voeg een click-eventlistener toe aan de knop
    discord.addEventListener("click", function() {
        // Navigeer naar de gewenste website
        window.location.href = "https://discord.gg/4fTFXz5W";
    });
    // Zoek de knop op basis van het id-attribuut
    var discord_Voodoo = document.getElementById("discord_Voodoo");

    // Voeg een click-eventlistener toe aan de knop
    discord_Voodoo.addEventListener("click", function() {
        // Navigeer naar de gewenste website
        window.location.href = "https://discord.gg/3RNDpNGb8r";
    });
    // Zoek de knop op basis van het id-attribuut
    var more_info_voodoo = document.getElementById("more_info_voodoo");

    // Voeg een click-eventlistener toe aan de knop
    more_info_voodoo.addEventListener("click", function() {
        // Navigeer naar de gewenste website
        window.location.href = "../Voodoo-Fortress-Website-main/extra-html/more-information.html";
    });
    var more_info_contact = document.getElementById("more_info_contact");

    // Voeg een click-eventlistener toe aan de knop
    more_info_contact.addEventListener("click", function() {
        // Navigeer naar de gewenste website
        window.location.href = "../contact us/more info contact/more info.html";
    });
});

