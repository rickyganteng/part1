const nilaibindo = 80;
const nilaimtk = 80;
const nilaiipa = 80;
const nilaibinggris = 79 ;

hasil = Number(nilaibindo) + Number(nilaibinggris) + Number(nilaiipa) + Number(nilaimtk);
total = hasil / 4;
var toalbulat = Math.ceil(total);

console.log(toalbulat);

if (nilaibindo.value == "" || nilaimtk.value == "" || nilaiipa.value == "" || nilaibinggris.value == "") {
  console.log("Input data terlebih dahulu");
} else if (90 <= toalbulat & toalbulat <= 100){
  console.log("Nilai A");
} else if (80 <= toalbulat & toalbulat <= 89) {
  console.log("Nilai B");
} else if (70 <= toalbulat & toalbulat <= 79) {
  console.log("Nilai C");
} else if (60 <= toalbulat & toalbulat <= 69) {
  console.log("Nilai D");
} else if (0 <= toalbulat & toalbulat <= 59) {
  console.log("Nilai E");
} else {
  console.log("Nilai tidak ada skala");
}

