import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import {Button} from 'primereact/button'
import {useState} from 'react'

const GorevEkle = () => {

    const [form,setForm] = useState({
        baslik: '',
        baslangic_tarihi:'',
        bitis_tarihi:''
    })

    // const [baslik,setBaslik] = useState('')
    // const [baslangicTarihi, setBaslangicTarihi] = useState('')
    // const [bitisarihi, setBitisTarihi] = useState('')

    const formuKaydet = () => {
       
        if (form.baslik === '') {
            alert('Lütfen görev başlığı giriniz')
            return
        }
        if (form.baslangic_tarihi === '') {
            alert('Lütfen başlangıç tarihi giriniz.')
            return
        }

        let kayitli_gorevler =  JSON.parse(localStorage.getItem('gorevler')) || []

        console.log('KAYITLI GOREVLER', kayitli_gorevler)

        let gorevler = [...kayitli_gorevler, form]

        localStorage.setItem('gorevler', JSON.stringify(gorevler))
        console.log('Kaydettim')

        setForm({
            baslik: '',
            baslangic_tarihi:'',
            bitis_tarihi:''
        })


    }

    return (
       <div className='card'>
            <div className='field' >
                <label htmlFor='gorevbasligi' className='block'>Görev Başlığı</label>
                <InputText id='gorevbasligi' style={{width:600}}  value={form.baslik} 
                            onChange={(event) => { setForm({ ...form, baslik:event.target.value  })}}
                            />
            </div>
            <div className='field'>
                <label className='block'>Görev Başlama Tarihi</label>
                <Calendar dateFormat="dd/mm/yy"   value={form.baslangic_tarihi}
                    onChange={(event) => { setForm({ ...form ,baslangic_tarihi: event.value }) }}/>
            </div>
            <div className='field'>
                <label className='block'>Görev Bitiş Tarihi</label>
                <Calendar dateFormat="dd/mm/yy" value={form.bitis_tarihi}
                    onChange={(event) => { setForm({...form, bitis_tarihi:event.value }) }}
                />
            </div>
            <div className='field'>
                <Button label="Kaydet" onClick={formuKaydet}  ></Button>
            </div>
       </div>
    )
}

export default GorevEkle;