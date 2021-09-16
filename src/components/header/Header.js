import { Container, Row, Col } from "react-bootstrap";
import Logo from '../../assets/images/logo.png';

function Header(){
    return(
        <div className = 'header'>
            <Container className = 'header'>
                <Row>
                    <Col className = 'header__logo'>
                        <a href = 'https://utpl.edu.ec/' target = '_blank'  rel="noreferrer">
                            <img src = {Logo} alt = 'logo_utpl'/>
                        </a>
                    </Col>                
                </Row>
            </Container>
        </div>
    );
}
export default Header;