import SChats, { SChatBox, SLeft } from "./styles";
import { Container, Col, Row } from "styled-bootstrap-grid";
import Friends from "./Friends";
import ChatDetail from "./ChatDetail";
import avt from "../../assets/images/avt-placeholder.png";
import BoxInput from "./BoxInput";
import ChatHeader from "./ChatHeader";
import Input from "../../components/Input";

export default function Chats() {
  return (
    <SChats>
      <Container fluid>
        <Row>
          <Col col={3} noGutter style={{ height: "100%" }}>
            <SLeft>
              <div className="header">
                <img
                  className="avt"
                  src={avt}
                  alt="avt"
                  height={48}
                  width={48}
                />
                <h3>Chats</h3>
              </div>
              <Input placeholder="Search ..." />
            <Friends />
            </SLeft>
          </Col>
          <Col col={9} noGutter>
            <SChatBox>
              <ChatHeader />
              <ChatDetail />
              <BoxInput />
            </SChatBox>
          </Col>
        </Row>
      </Container>
    </SChats>
  );
}
