import Yemek from './components/Yemek'
import {useState} from 'react'

const App = () => {

  const [yemekler, setYemekler] = useState([
    {
      adi: 'Mercimek Çorba',
      aciklama: 'Geleneksel Çorba',
      kalori: 120
    },{
      adi: 'Köfte',
      aciklama: 'İzmir Köfte',
      kalori: 250
    },{
      adi: 'Salata',
      aciklama: 'Mevsim Salata',
      kalori: 25
    }
  ])

  const  renderYemekler = () => {
    const yemeklerComponent = yemekler.map( (yemek) => {
      return (
        <Yemek 
          adi={yemek.adi}
          aciklama={yemek.aciklama}
          kalori={yemek.kalori}
        ></Yemek>
      )
    } )

    return yemeklerComponent
  }
  
  return (
    <div>
        {renderYemekler()}
    </div>
      
    )
  }



export default App;
