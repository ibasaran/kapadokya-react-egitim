import {useParams, useLocation} from 'react-router-dom'

const BlogDetay = () => {

    const {id} = useParams();
    const location = useLocation();

    return (
        <>
            <h1>Blog Detay Sayfası  {id} </h1>
            <p>{location.state.blog.id} - {location.state.blog.baslik} - {location.state.blog.blogDetay}</p>
            <p>{location.state.extra}</p>
        </>
    )
}

export default BlogDetay;