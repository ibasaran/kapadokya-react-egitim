import { useState } from "react";

const BlogIstatistik = () => {

    const [blogs,setBlogs] = useState(
        [
            {
                id:1,
                baslik: 'Javascript kurulum',
                detay: 'Javascript şöyle kurulur...',
                goruntulenme:3
            },
            {
                id:2,
                baslik: 'REactjs kurulum',
                detay: 'Javascript şöyle kurulur...',
                goruntulenme:5
            },
            {
                id:3,
                baslik: 'Database kurulum',
                detay: 'Javascript şöyle kurulur...',
                goruntulenme:7
            },
        ]
    )

        const blogEkle = () => {
            setBlogs([...blogs, {id:4, baslik:'Java kurulum', detay:'Java kurulum detay', goruntulenme:0}])
        }

    return (
        <>
            <button onClick={blogEkle}>Yeni blog ekle</button>
            <table style={{border:'1px solid'}}>
                <thead>
                    <th style={{border:'1px solid'}} >Blog Başlığı</th>
                    <th style={{border:'1px solid'}}>Kaç Kez Görüntülendi</th>
                </thead>
                <tbody>
                   {
                    blogs.map( (blog,index) => {
                        return (
                            <tr key={index + 'tr'}>
                                <td>
                                    {blog.baslik}
                                </td>
                                <td>{blog.goruntulenme}</td>
                            </tr>
                        )
                    } )
                   }
                </tbody>
            </table>
        </>
    )
}


export default BlogIstatistik;