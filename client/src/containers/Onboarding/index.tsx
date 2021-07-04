import {
  faChevronRight,
  faGlobeAsia,
  faSms,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import theme from "../../common/theme";
import Button from "../../components/Button";
import SOnboarding from "./styles";

export default function Onboarding() {
  const history = useHistory();

  useLayoutEffect(() => {
    if(localStorage.getItem('token')){
      history.replace('/chats')
    }
  }, [])

  return (
    <SOnboarding>
      <div className="logo">
        <FontAwesomeIcon icon={faGlobeAsia} color="white" size="6x" />
        <FontAwesomeIcon icon={faSms} color="white" size="6x" />
      </div>
      <p>Bring the world together</p>
      <div className="button">
        <Button
          color="white"
          onClick={() => {
            history.push("/login");
          }}
        >
          Getting started{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            color={theme.colors.primary.blue}
            size="1x"
          />{" "}
        </Button>
      </div>
    </SOnboarding>
  );
}
