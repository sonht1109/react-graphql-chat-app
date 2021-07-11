import Input from "../../components/Input";
import SNewMessSearching from "./styles";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { useLazyQuery } from "@apollo/client";
import { GET_USERS } from "./store/queries";
import Loading from "../../components/Loading";
import { Children } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import theme from "../../common/theme";
import User from "./User";

export default function NewMessage() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const [getUsers, { data, loading }] = useLazyQuery(GET_USERS);

  const onSubmit = (data: { username: string }) => {
    getUsers({
      variables: {
        username: data.username,
      },
    });
  };

  return (
    <SNewMessSearching>
      <div className="header" onClick={() => history.goBack()}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          color={theme.colors.primary.blue}
          size="1x"
        />
        <Header style={{ marginLeft: "10px" }}>Search</Header>
      </div>
      <form className="search" onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("username")} placeholder="Searching ..." />
        <div className="icon">
          <FontAwesomeIcon
            icon={faSearch}
            color={theme.colors.primary.blue}
            size="1x"
          />
        </div>
      </form>
      {loading ? (
        <Loading size="30px" />
      ) : (
        data && (
          <div className="users">
            {Children.toArray(
              data.getUsers.map((u: any, index: number) => (
                <User user={u} isLast={index + 1 === data.getUsers.length} />
              ))
            )}
          </div>
        )
      )}
    </SNewMessSearching>
  );
}
