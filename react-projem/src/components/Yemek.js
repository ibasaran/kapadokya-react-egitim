const Yemek = (props) => {

    return (
        <div>
            <h1>Adı : {props.adi}</h1>
            <p>Açıklaması : {props.aciklama}</p>
            <p>Kalorisi : {props.kalori}</p>
        </div>
    )
}


export default Yemek