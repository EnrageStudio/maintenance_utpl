import { Container, Row, Col } from "react-bootstrap";
import Wait from '../../assets/images/wait.png';

function Content(){
    return(
        <div className = 'content'>
            <Container>
                <Row className = 'align-items-center'>
                    <Col md = 'auto'>
                        <div className = 'content__txt'>
                            <h3>Lamentamos los inconvenientes</h3>
                            <p>El sistema estará disponible muy pronto</p>
                        </div>
                    </Col>
                    <Col md = 'auto'>
                        <img src = {Wait} alt = 'img_reference'/>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}
export default Content;