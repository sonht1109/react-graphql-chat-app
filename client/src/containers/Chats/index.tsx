import SChats, { SChatBox, SLeft } from "./styles";
import Friends from "./Friends";
import ChatDetail from "./ChatDetail";
import avt from "../../assets/images/avt-placeholder.png";
import BoxInput from "./BoxInput";
import ChatHeader from "./ChatHeader";
import Input from "../../components/Input";

export default function Chats() {
  return (
    <SChats>
      <SLeft>
        <div className="header">
          <img className="avt" src={avt} alt="avt" height={48} width={48} />
          <h3>Chats</h3>
        </div>
        <div style={{ padding: "10px" }}>
          <Input placeholder="Search ..." />
        </div>
        <Friends />
      </SLeft>

      <SChatBox>
        <ChatHeader />
        <ChatDetail />
        <BoxInput />
      </SChatBox>
    </SChats>
  );
}
