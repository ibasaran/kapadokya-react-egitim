// KONTROL YAPILARI
// if - else
// if (koşul) { koşul gerçekleşirse } 
// else { koşul gerçekleşmezse }

var vize = prompt('Vize notunu giriniz.')
var final = prompt('final notunu giriniz')
// '50'
var sonuc = (parseInt(vize)*0.4) + (parseInt(final)*0.6)

console.log(sonuc)

console.log(sonuc > 50 ? 'Geçti': 'Kaldı')

if (sonuc>50) {
  console.log('Geçti')
} else {
  console.log('Kaldı')
}

// switch (kontrol edilecek değer) {
// case koşul:
//         Bu işlemi yap
// break;
// case başka_koşul:
//         Bu işlemi
// break;
// default:
//        Bu işlem yapılacak
//}
console.log(sonuc < 40)
/***
switch (sonuc) {
  case (sonuc < 40):
  console.log('FF ile kaldı')
  break;
  case sonuc > 40 && sonuc < 60:
  console.log('DD ile geçti')
  break;
  case sonuc > 60 && sonuc < 80:
  console.log('AB ile geçti')
  break;
  case sonuc > 80:
  console.log('AA ile geçti')
  break;
  
}
***/


/***
  for( baslangic_degeri; sonlanma kriteri; dogru degerini duzenle) {}
***/

for (var i=0; i < 10; i++) {
  //console.log('Değerim ', i)
}

/***

  while (koşul) {}
  
***/

var j = 0;

while (j < 10) {
  console.log('While ', j)
  j++
}




