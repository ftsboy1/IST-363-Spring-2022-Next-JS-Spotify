import Container from "./Container";
import Row from "./Row.js"
import sytles from './footer.module.scss'
import Logo from "./Logo";
import Col from "./Col";
import Nav from "./Nav";



const Footer = () => {
    return <footer className={sytles.footer}> 
        <Container>
            <Row alignItem="center">
                <Col xs="6" sm="3">
                    <Logo color="white"/>
                </Col>
                <Col sm="9">
                    <Nav/>
                </Col>
                <Col sm='3'>
                social media link
                </Col>
            </Row>
            <Row>
                Copyright 2022 spotify, Inc.
            </Row>
           
        </Container>
    </footer>
}
export default Footer;