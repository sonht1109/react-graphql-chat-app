import SChats, { SChatBox, SLeft } from "./styles";
import Friends from "./Friends";
import ChatDetail from "./ChatDetail";
import avt from "../../assets/images/avt-placeholder.png";
import BoxInput from "./BoxInput";
import ChatHeader from "./ChatHeader";
import Input from "../../components/Input";
import { subMenus } from "./data/index";
import SubMenu from "../../components/SubMenu";
import { useRef } from "react";
import { useHistory } from "react-router";

export default function Chats() {

  const parentRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.replace('/login');
  }

  return (
    <SChats>
      <SLeft>
        <div className="header-left">
          <img className="avt" src={avt} alt="avt" height={48} width={48} />
          <div className="submenu" ref={parentRef}>
            <h3>Chats</h3>
            <SubMenu parent={parentRef} menus={subMenus(handleLogout)} />
          </div>
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
