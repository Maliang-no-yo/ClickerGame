let h = 0;
let hps = 0

var quantityPurr = 0
var pricePurr = 50

var quantityFood = 0
var priceFood = 100

var quantityToy = 0
var priceToy = 175

var quantityBox = 0
var priceBox = 500

var quantityCT = 0
var priceCT = 1700


function addHappiness(amout) {
    h = (h + amout);
    document.getElementById("happiness").innerHTML = h;
}

function purr() {
    if (h >= pricePurr) {
        h = h - pricePurr;
        quantityPurr = quantityPurr + 1;
        pricePurr = Math.round(pricePurr * 1.5);

        document.getElementById("happiness").innerHTML = h;
        document.getElementById("pricePurr").innerHTML = pricePurr;
        document.getElementById("p").innerHTML = quantityPurr;
        getHPS();
    }
}

function food() {
    if (h >= priceFood) {
        h = h - priceFood;
        quantityFood = quantityFood + 1;
        priceFood = Math.round(priceFood * 1.5);

        document.getElementById("happiness").innerHTML = h;
        document.getElementById("priceFood").innerHTML = priceFood;
        document.getElementById("f").innerHTML = quantityFood;
        getHPS();
    }
}

function toy() {
    if (h >= priceToy) {
        h = h - priceToy;
        quantityToy = quantityToy + 1;
        priceToy = Math.round(priceToy * 1.5);

        document.getElementById("happiness").innerHTML = h;
        document.getElementById("priceToy").innerHTML = priceToy;
        document.getElementById("t").innerHTML = quantityToy;
        getHPS();
    }
}

function box() {
    if (h >= priceBox) {
        h = h - priceBox;
        quantityBox = quantityBox + 1;
        priceBox = Math.round(priceBox * 1.5);

        document.getElementById("happiness").innerHTML = h;
        document.getElementById("priceBox").innerHTML = priceBox;
        document.getElementById("b").innerHTML = quantityBox;
        getHPS();
    }
}

function cattree() {
    if (h >= priceCT) {
        h = h - priceCT;
        quantityCT = quantityCT + 1;
        priceCT = Math.round(priceCT * 1.5);

        document.getElementById("happiness").innerHTML = h;
        document.getElementById("priceCTree").innerHTML = priceCT
        document.getElementById("ct").innerHTML = quantityCT;
        getHPS();
    }
}

setInterval(function () {
    h = h + quantityPurr;
    h = h + quantityFood * 2;
    h = h + quantityToy * 5;
    h = h + quantityBox * 15;
    h = h + quantityCT * 50;
    document.getElementById("happiness").innerHTML = h;
    document.getElementById("p").innerHTML = quantityPurr;
    document.getElementById("f").innerHTML = quantityFood;
    document.getElementById("t").innerHTML = quantityToy;
    document.getElementById("b").innerHTML = quantityBox;
    document.getElementById("ct").innerHTML = quantityCT;
}, 1000);

function getHPS() {
    hps = quantityPurr + quantityFood * 2 + quantityToy * 5 + quantityBox * 15 + quantityCT * 50;
    document.getElementById("hps").innerHTML = hps;
}