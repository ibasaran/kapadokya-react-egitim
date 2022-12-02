import React from 'react'
import Yemek from './components/Yemek'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      yemek_adi: "Makarna",
      yemek_aciklamasi: "Spagetti",
      yemek_kalorisi: "300"
    }
  }


  componentDidMount() {
    console.log('Component did mount metodu çalıştı.')
    const timeOut = setTimeout( () => {
      console.log('Timeout metodu çalıştı')
      this.setState({...this.state, yemek_adi: 'Mantı'})
    } , 5000)
  }

  // Component kaldırıldığında çalışan metod
  componentWillUnmount() {
    console.log('Component Will Unmount metodu çalıştı.')
  }



  render() {
    return (
      <div>
          <Yemek
            adi={this.state.yemek_adi}
            aciklama={this.state.yemek_aciklamasi}
            kalori={this.state.yemek_kalorisi}
          ></Yemek>
      </div>
    )
  }
}


export default App;
