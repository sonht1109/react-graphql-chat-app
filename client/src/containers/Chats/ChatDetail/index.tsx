import SChatDetail from "./styles";
import avt from "../../../assets/images/avt-placeholder.png";
import more from "../../../assets/images/more.svg";

export default function ChatDetail() {
  return (
    <SChatDetail>
      <div className="chat-detail_header">
        <img src={avt} width={48} height={48} alt="avt" className="avt" />
        <h3 className="username">dp.thaovy</h3>
        <div className="more">
          <img alt="mote" src={more} width={20} height={40} />
        </div>
      </div>
    </SChatDetail>
  );
}
