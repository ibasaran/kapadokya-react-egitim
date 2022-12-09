import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios'
import { useState,useEffect } from 'react';

const Gorevler = () => {

    const [posts,setPosts] = useState([])

    const gorevler = [
        {
            id:1,
            gorev_adi:'Reactjs calisilacak',
            baslangic_tarihi: '01.01.2022',
            bitis_tarihi: '05.01.2022'
        },
        {
            id:2,
            gorev_adi:'Javascript calisilacak',
            baslangic_tarihi: '01.01.2022',
            bitis_tarihi: '05.01.2022'
        }
    ]

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
             setPosts(response.data)   
        })
    }, [] )

    return (
        <div>
            <DataTable value={gorevler}>
                <Column field='gorev_adi' header="Görev Adı"></Column>
                <Column field='baslangic_tarihi' header="Başlangıç Tarihi"></Column>
                <Column field='bitis_tarihi' header="Bitiş Tarihi"></Column>
            </DataTable>

            <DataTable value={posts}>
                <Column field="title" header="Başlık"></Column>
                <Column field="body" header="Detay"></Column>
            </DataTable>
        </div>
    )
}

export default Gorevler;