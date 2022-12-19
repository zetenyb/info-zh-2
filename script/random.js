function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  

function rand() {

let egy = document.getElementById("cucc1").value;
let ketto = document.getElementById("cucc2").value;
let harom = document.getElementById("cucc3").value;
let negy = document.getElementById("cucc4").value;
let ot = document.getElementById("cucc5").value;
var Arr =[egy, ketto, harom, negy, ot];
shuffle(Arr);
const kivalasztott = Arr.slice(0,3)


document.getElementById('pText').innerHTML = "Véletlenszerűen választott:" + kivalasztott;
  
}