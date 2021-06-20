import { ISubMenuItem } from "../../../components/SubMenu";
import logoutIcon from '../../../assets/images/logout.svg';
import homeIcon from '../../../assets/images/home.svg';
// import friendsIcon from '../../../assets/images/friends.svg';

export const subMenus: ISubMenuItem[] = [
  {
    title: "Home",
    href: '/',
    icon: <img src={homeIcon} alt="home" width={16} height={16} />,
    type: 'link',
  },
  {
    title: "Log out",
    href: '/login',
    icon: <img src={logoutIcon} alt="logout" width={16} height={16} />,
    type: 'link',
  }
]