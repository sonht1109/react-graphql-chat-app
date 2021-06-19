import React from "react";
import avt from "../../../assets/images/avt-placeholder.png";
import moreIcon from "../../../assets/images/more.svg";
import SChatHeader from "./styles";

export default function ChatHeader() {
  return (
    <SChatHeader>
      <img src={avt} width={48} height={48} alt="avt" className="avt" />
      <h3 className="username">dp.thaovy</h3>
      <div className="more">
        <img alt="more" src={moreIcon} width={20} height={40} />
      </div>
    </SChatHeader>
  );
}
