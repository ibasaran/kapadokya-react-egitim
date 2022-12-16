import {useParams, useLocation} from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'

const BlogDetay = () => {

    const {id} = useParams();
    const location = useLocation();

    return (
        <Container>
            <Row>
                <Col>
                    <img src={location.state.blog.resim} style={{width: '100%', marginTop:20, marginBottom:20 }}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    {location.state.blog.detay}
                </Col>
            </Row>
        </Container>
    )
}

export default BlogDetay;