import {
  faChevronRight,
  faGlobeAsia,
  faSms,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import theme from "../../common/theme";
import Button from "../../components/Button";
import SHome from "./styles";

export default function Home() {
  const history = useHistory();

  return (
    <SHome>
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
    </SHome>
  );
}
