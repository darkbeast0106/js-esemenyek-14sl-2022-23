function villanykorteFelkapcsol() {
    const villanykorte = document.getElementById("villanykorte");
    villanykorte.setAttribute("src", "img/pic_bulbon.gif");
}

function villanykorteLekapcsol() {
    const villanykorte = document.getElementById("villanykorte");
    villanykorte.setAttribute("src", "img/pic_bulboff.gif");
}

function bevitelFocus() {
    console.log("Belekattintott a beviteli mezőbe.");
}

function bevitelInput() {
    const bevitel = document.getElementById("bevitel");
    const beirtErtek = bevitel.value;
    console.log("Mezőbe írt érték:", beirtErtek);
}

function bevitelBlur() {
    const bekezdes = document.getElementById("uzenet");
    bekezdes.innerHTML = "Nyisd meg a konzolt (ctrl+shift+i)!";
}

function uzenetPirosra() {
    const uzenet = document.getElementById("uzenet");
    uzenet.style.color = "red";
    uzenet.style.backgroundColor = "#AAAAAA";
}