import React, {useState, useEffect} from 'react'
import Yemek from './components/Yemek'
const FunctionalComponent = () => {

  const [yemekAdi,setYemekAdi] = useState("Makarna")
  const [aciklama,setAciklama] = useState('Spagetti')
  const [kalori, setKalori] = useState(300)

  const [yemek,setYemek] = useState({
    adi: 'Makarna',
    aciklama: 'Spagetti',
    kalori: 300
  })

  useEffect(() => {
    console.log('Use effect hook çalıştı')
    // Backend uygulamasından verileri çekip state güncellenirse
    // veriler ekranda görünür olur. 
    setTimeout(()=> {
      setYemek({...yemek, adi:'Mantı'})
    }, 5000)
  },[])
  
  
  return (
      <div>
          <Yemek
            adi={yemek.adi}
            aciklama={yemek.aciklama}
            kalori={yemek.kalori}
          ></Yemek>
      </div>
    )
  }



export default FunctionalComponent;
