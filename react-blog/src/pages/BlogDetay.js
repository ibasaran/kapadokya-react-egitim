import {useParams} from 'react-router-dom'

const BlogDetay = () => {

    const {id} = useParams();

    return (
        <h1>Blog Detay Sayfası  {id}  </h1>
    )
}

export default BlogDetay;