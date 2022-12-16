import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'

const BlogList = () => {

    const navigate = useNavigate()

    const [blogs,setBlogs] = useState([])

    const [seciliKategori, setSeciliKategori] = useState('')

    const blogDetayAc = (blog) => {
        //navigate('/blogdetay/' + detayId)

        blog.gosterim += 1
        const blog_index = blogs.findIndex( (blog_item) => { return blog_item.id === blog.id })
        let blogs_copy = [...blogs]
        blogs_copy[blog_index] = blog

        localStorage.setItem('blogs', JSON.stringify(blogs_copy))
        setBlogs(blogs_copy)
        //blogs.findIndex( blog_item => blog_item.id === blog.id )

        navigate('/blogdetay/' + blog.id, {state:{ blog:blog}})
    }

    useEffect( () => {

        const blog_verileri = JSON.parse(localStorage.getItem('blogs')) || []
        setBlogs(blog_verileri)

    }, [])


    const filteredBlogs = blogs.filter( (blog) => {

        if (seciliKategori === '') {
            return true
        } else {
            return blog.kategori === seciliKategori
        }

        

    } )

    

    return (
        <Container>

            <Row>
                <Col>
                        <Form.Group>
                            <Form.Label>Filtrelemek istediniz kategoriyi seçiniz</Form.Label>
                            <Form.Select onChange={(event) => {setSeciliKategori(event.target.value)}}>
                                <option value=''>Seçiniz</option>
                                <option value='B'>Bilgisayar</option>
                                <option value='G'>Genel</option>
                            </Form.Select>
                        </Form.Group>
                </Col>
            </Row>
            
            {

                blogs.length > 0 ?

                (filteredBlogs.map( (blog,index) => {

                    return (
                        <Row key={index + 'blog'} style={{marginTop: '20px'}}>
                            <Col>
                                <Card>
                                    <Card.Header>{blog.baslik}</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col xs={8}>
                                                {blog.detay} 
                                                <Button variant='link' onClick={() => blogDetayAc(blog) }>Devamı</Button>
                                            </Col>
                                            <Col xs={4}>
                                                <img src={blog.resim} style={{width:'50%'}}></img>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )

                } )) : <h1>Henüz blog kaydı girilmedi</h1>
            }


        </Container>
    )
}


export default BlogList;