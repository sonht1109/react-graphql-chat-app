import React from "react";
import { SUser } from "./styles";
import avtPlaceholder from "../../assets/images/avt-placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import theme from "../../common/theme";

export default function User({ user, isLast }: { user: any; isLast: boolean }) {
  return (
    <SUser isLast={isLast}>
      <img
        className="avatar"
        src={user.imageUrl || avtPlaceholder}
        alt="avatar"
        width={48}
        height={48}
      />
      <div className="detail">
        <span className="username">{user.username}</span>
        <div className="options">
          <div className="option-item">
            <FontAwesomeIcon
              icon={faComment}
              size="1x"
              color={theme.colors.primary.blue}
            />
          </div>
          <div className="option-item">
            <FontAwesomeIcon
              icon={faUserPlus}
              size="1x"
              color={theme.colors.primary.blue}
            />
          </div>
        </div>
      </div>
    </SUser>
  );
}
