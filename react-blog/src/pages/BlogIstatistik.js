import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

const BlogIstatistik = () => {

    const [blogs,setBlogs] = useState([])

    const blogEkle = () => {
        setBlogs([...blogs, {id:4, baslik:'Java kurulum', detay:'Java kurulum detay', goruntulenme:0}])
    }

    useEffect(() => {

        const blog_items = JSON.parse(localStorage.getItem('blogs')) || []
        setBlogs(blog_items)

    }, []);

    return (
        <>
            
            <Table bordered striped  style={{margin:20}}>
                <thead>
                    <tr>
                        <th>Blog Başlığı</th>
                        <th>Kaç Kez Görüntülendi</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    blogs.map( (blog,index) => {
                        return (
                            <tr key={index + 'tr'}>
                                <td>
                                    {blog.baslik}
                                </td>
                                <td>{blog.gosterim}</td>
                                <td>
                                    <Button>Sil</Button>
                                </td>
                            </tr>
                        )
                    } )
                   }
                </tbody>
            </Table>
        </>
    )
}


export default BlogIstatistik;