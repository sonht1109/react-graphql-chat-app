import SChats from "./styles";
import { Container, Col, Row } from "styled-bootstrap-grid";
import Friends from "./Friends";
import ChatDetail from "./ChatDetail";
import avt from '../../assets/images/avt-placeholder.png'

export default function Chats() {
  return (
    <SChats>
      <Container fluid>
        <Row>
          <Col sm={3} noGutter>
            <div className="header">
              <img className="avt" src={avt} alt="avt" height={48} width={48} />
              <h3>Chats</h3>
            </div>
            <Friends />
          </Col>
          <Col sm={9} noGutter>
            <ChatDetail />
          </Col>
        </Row>
      </Container>
    </SChats>
  );
}
