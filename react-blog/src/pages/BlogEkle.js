import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';

const BlogEkle = () => {

    const [form,setForm] = useState({
        id:'',
        baslik:'',
        detay:'',
        resim:'',
        gosterim:0,
        kategori:''
    })

    const formKaydet = () => {
        const form_copya = {...form, id: Date.now()}
        const blog_kayitlari = JSON.parse(localStorage.getItem('blogs')) || []
        localStorage.setItem('blogs', JSON.stringify([...blog_kayitlari,form_copya]))

        setForm({
            id:'',
            baslik:'',
            detay:'',
            resim:'',
            gosterim:0,
            kategori:''
        })

    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Blog Başlığı</Form.Label>
                <Form.Control type='text' value={form.baslik} 
                    onChange={(event) => setForm({...form, baslik:event.target.value})}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Blog Detay</Form.Label>
                <Form.Control type='text' value={form.detay} 
                    onChange={(event) => {setForm({...form, detay:event.target.value})}}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Blog Kategorisi</Form.Label>
                <Form.Select value={form.kategori}  onChange={(event) => {setForm({...form, kategori:event.target.value})}}>
                    <option value='B'>Bilgisayar</option>
                    <option value='G'>Genel</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Blog Resmi</Form.Label>
                <Form.Control type='text' value={form.resim} 
                        onChange={(event) => { setForm({...form, resim:event.target.value}) }}></Form.Control>
            </Form.Group>
            <Button onClick={formKaydet}>Kaydet</Button>
        </Form>
    )
}

export default BlogEkle;