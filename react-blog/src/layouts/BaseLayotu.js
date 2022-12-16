import { Outlet, Link } from "react-router-dom"
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import './baselayout.css'
import MyLink from "../components/MyLink"

const BaseLayout = () => {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to="/">React Blog</Navbar.Brand>
                            <Navbar.Collapse>
                                <Nav>
                                    <Nav.Link as={Link} to="/">
                                        Blog Listesi
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/blogekle">
                                        Blog Ekle
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/blogistatistik">
                                        Blog İstatistik
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col md={{span:8, offset:2}}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}


export default BaseLayout;