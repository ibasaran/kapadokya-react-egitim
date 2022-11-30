function topla(a,b) {
    return a + b
  }
  
  var sonuc = topla(5,3)
  
  console.log('Sonuç ',sonuc)
  
  // ARROW Fonksiyon
  
  const cikar = (a,b) => {
    return a - b
  }
  
  console.log(cikar(6,3))



  // CLASSES

  class Book {
    constructor(name, authors, year) {
      this.name = name;
      this.authors = authors;
      this.year = year;
    }
    
    fullName() {
      return this.name + ' ' + this.authors
    }
    
  }
  
  class Hayvan {
    constructor() {
      
    }
    
    sesCikar() {
      console.log('Ses')
    }
    
    cinsi(){
      console.log('Hayvan')
    }
  }
  
  class Kedi extends Hayvan {
    constructor() {
      super()
    }
    
    sesCikar() {
      console.log('Miyav')
    }
  }
  
  var hayvan = new Hayvan()
  var kedi = new Kedi();
  
  console.log(kedi.cinsi())



  let aile = ['Anne', 'Baba', 'Çocuk 1', 'Çocuk 2']

// ARRAY MAP
aile.map(function(birey,index) {
  console.log(birey,index)
})

aile.map((birey, index) => {
  console.log('Ok fonksiyonu', birey)
})

// FILTER 

let filtreliSonuc = aile.filter((birey) => {
  return birey.includes('Çocuk')
})

console.log(filtreliSonuc)

// SPREAD operatoru ... kopyalama yapar

let isimler1 = ['Ali', 'Veli']
let isimler2 = ['Nazlı', 'Ayşe']

let isimlerHepsi = [...isimler1, ...isimler2]

console.log(isimlerHepsi)

let person = {
  name:'ismail',
  age: 38,
}

person = {...person, "name":'ahmet'}

console.log(person)

// REST operator ... 

function restParametreler(...parametreler) {
  console.log(parametreler)
}

restParametreler(1,2,3,4,5,6)
restParametreler(4,5,6)











  
  
  

  

