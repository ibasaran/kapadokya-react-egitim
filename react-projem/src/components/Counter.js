import {useState} from 'react'


const Counter = (props) => {

    const [count,setCount] = useState(0)

    const artir = () => {
        console.log('artit fonksiyonu')
        setCount(count + 1)
    }

    const eksilt = () => {
        console.log('Eksilt')
        setCount(count - 1)
    }

    return (
        <div>
            <h1 style={{marginLeft:30}}>{count}</h1>
            <button onClick={artir}>+ Artır</button>
            <button onClick={eksilt}> - Eksilt</button>
        </div>
    ) 
}


export default Counter