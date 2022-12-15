import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Button } from 'primereact/button';

const Gorevler = () => {

    const [posts,setPosts] = useState([])
    const [gorevler,setGorevler] = useState();


    useEffect( () => {
        // axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        //      setPosts(response.data)   
        // })
        setGorevler(JSON.parse(localStorage.getItem('gorevler')))
    }, [] )

    const gorevSil = (gorev) => {
        console.log('Silinmesi istenen görev', gorev)
        let kayitli_gorevler =  JSON.parse(localStorage.getItem('gorevler'))

        kayitli_gorevler = kayitli_gorevler.filter( (gorevItem) => {
                if ( gorevItem.baslik !== gorev.baslik) return gorevItem
        })

        localStorage.setItem('gorevler', JSON.stringify(kayitli_gorevler))

        setGorevler(kayitli_gorevler)
    }

    const islemler = (rowData) => {
        return <div>
            <Button label='Sil' onClick={() => gorevSil(rowData)}></Button>
        </div>
    }

    return (
        <div>
            <DataTable value={gorevler}>
                <Column field='baslik' header="Görev Adı"></Column>
                <Column field='baslangic_tarihi' header="Başlangıç Tarihi"></Column>
                <Column field='bitis_tarihi' header="Bitiş Tarihi"></Column>
                <Column header="İşlemler" body={islemler}></Column>
            </DataTable>
{/* 
            <DataTable value={posts}>
                <Column field="title" header="Başlık"></Column>
                <Column field="body" header="Detay"></Column>
            </DataTable> */}
        </div>
    )
}

export default Gorevler;