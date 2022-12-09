import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import {Button} from 'primereact/button'

const GorevEkle = () => {
    return (
       <div className='card'>
            <div className='field' >
                <label htmlFor='gorevbasligi' className='block'>Görev Başlığı</label>
                <InputText id='gorevbasligi' style={{width:600}}/>
            </div>
            <div className='field'>
                <label className='block'>Görev Başlama Tarihi</label>
                <Calendar dateFormat="dd/mm/yy" />
            </div>
            <div className='field'>
                <label className='block'>Görev Bitiş Tarihi</label>
                <Calendar dateFormat="dd/mm/yy" />
            </div>
            <div className='field'>
                <Button label="Kaydet"></Button>
            </div>
       </div>
    )
}

export default GorevEkle;