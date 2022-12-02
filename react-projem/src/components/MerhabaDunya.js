
const MerhabaDunya = (props) => {

    let name = "Kapadokya"

    return (
        <h1>Merhaba {props.name} bölüm {props.bolum}</h1>
    )
}

const MerhabaDunya2 = () => {
    return (
        <h1>Merhaba Dünya 2 Componenti</h1>
    )
}

const MerhabaDunya3 = () => {
    return (
        <h1>Merhaba Dünya 3 Componenti</h1>
    )
}

export {MerhabaDunya2,MerhabaDunya3};  // Named export 

export default MerhabaDunya; // Default export