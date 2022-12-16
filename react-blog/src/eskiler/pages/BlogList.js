import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { Button } from 'react-bootstrap';

const BlogList = () => {

    const navigate = useNavigate()

    const [blogs,setBlogs] = useState([
        {
            id:1,
            baslik: 'Blog Başlık',
            blogDetay: 'Lorem Ipsum'
        },
        {
            id:2,
            baslik: 'Blog Başlık 2',
            blogDetay: 'Lorem Ipsum'
        },
        {
            id:3,
            baslik: 'Blog Başlık 3',
            blogDetay: 'Lorem Ipsum'
        }
    ])

    const blogDetayAc = (blog) => {
        //navigate('/blogdetay/' + detayId)
        navigate('/blogdetay/' + blog.id, {state:{extra:'extra bilgi', blog:blog}})
    }

    return (
        <div>
            <Button>Button</Button>

            {
                blogs.map( (blog,index) => {

                    return (
                        <div key={index + 'blog'}>
                            <h1>{blog.baslik}</h1>
                            <p>
                                {blog.blogDetay}  <button onClick={() => blogDetayAc(blog)}>Devamı</button>
                            </p>
                        </div>
                    )

                } )
            }


        </div>
    )
}


export default BlogList;