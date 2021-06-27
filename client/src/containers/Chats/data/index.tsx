import { ISubMenuItem } from "../../../components/SubMenu";
import logoutIcon from "../../../assets/images/logout.svg";
import homeIcon from "../../../assets/images/home.svg";
import newMessageIcon from "../../../assets/images/plus.svg";
// import friendsIcon from '../../../assets/images/friends.svg';

export const subMenus = (handleLogout: () => void): ISubMenuItem[] => [
  {
    title: "Home",
    href: "/",
    icon: <img src={homeIcon} alt="home" width={16} height={16} />,
    type: "link",
  },
  {
    title: "New message",
    href: "/new-message",
    icon: <img src={newMessageIcon} alt="new-message" width={16} height={16} />,
    type: "trigger",
    callback: handleLogout,
  },
  {
    title: "Log out",
    href: "/login",
    icon: <img src={logoutIcon} alt="logout" width={16} height={16} />,
    type: "trigger",
    callback: handleLogout,
  },
];
