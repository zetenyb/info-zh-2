function getStandardDeviation (array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
  }

function ar() {
    const nevek = [];
    nevek[0] = document.getElementById("1.1").value;
    nevek[1] = document.getElementById("1.2").value;
    nevek[2] = document.getElementById("1.3").value;
    nevek[3] = document.getElementById("1.4").value;
    nevek[4] = document.getElementById("1.5").value;
    
    const arak = [];
    arak[0] = parseInt(document.getElementById("2.1").value);
    arak[1] = parseInt(document.getElementById("2.2").value);
    arak[2] = parseInt(document.getElementById("2.3").value);
    arak[3] = parseInt(document.getElementById("2.4").value);
    arak[4] = parseInt(document.getElementById("2.5").value);
 
    const atlag = arak.reduce((a, b) => a + b, 0) / arak.length;
    const szoras = getStandardDeviation(arak);
    
    const min = Math.min(...arak)
    minhely = arak.indexOf(min)
    legolcsobb = nevek[minhely]

    document.getElementById("szoras").innerHTML = "Szórás: " + szoras;
    document.getElementById("atlag").innerHTML = "Átlagos ár:" + atlag;
    document.getElementById("olcso").innerHTML = "Legolcsóbb termék: " + legolcsobb + " " + min;



}