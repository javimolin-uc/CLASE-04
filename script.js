var losDigimon, elArreglo, laPosicion, elColor

function preload() {
    losDigimon = loadJSON("https://digimon-api.vercel.app/api/digimon");
}

function setup() {
    elArreglo = Object.values(losDigimon);
    laPosicion = Math.round(random(0,elArreglo.length));
    console.log(laPosicion);
    createElement("h1", "Dibuja a <a href='"+ elArreglo[laPosicion].img +"' target='_blank'>" + elArreglo[laPosicion].name + "</a>").parent("instruccion");
    var descarga = select("#descarga");
    descarga.mousePressed(artemania);   
    var descarga = select("#borra");
    descarga.mousePressed(borrador);
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background("#efebe9");
    elColor = createColorPicker("#002800").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
}

function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function artemania() {
    saveCanvas("mi_digi", "jpg");
}

function borrador() {
    background("#eceff1");
}
