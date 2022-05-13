import Container from './Container'
import Row from "./Row"
import styles from './header.module.scss'
import Col from './Col'
import Logo from './Logo'
import Nav from './Nav'
import ButtonUI from './ButtonUI'
import NavOverLay from "./NavOverLay"
import {useState} from 'react'
 
const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return <header className={styles.header}> 
        { isMenuVisible &&
        <NavOverLay clickHandler={setMenuVisible}/>
        }
        <Container>
            <Row 
            justifyContent="space-between"
            alignItem="center"
            >
            <Col xs="3" sm="3">
                <Logo color="white" size= {2}/>
                
            </Col>
                <Col xs="9" sm="9" textAlign="right">
                    <Nav/>
                    <ButtonUI
                     icon="menu"
                     color="white"
                     clickHandler={()=> {
                        setMenuVisible(true)
                    }}
                    />
                </Col>
            </Row>
        
        </Container>
        </header>
}
export default Header;