import { useLazyQuery } from "@apollo/client";
import { faSms } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SLogin from "./styles";
import { LOGIN_QUERY } from "./queries";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { ILogin } from "./types";
import globalMessages from "../../utils/globalMessages";
import REGEX from "../../utils/regex";
import ErrorMessage from "../../components/ErrorMessage";
import theme from "../../common/theme";

export default function Login() {
  // sonht@mailinator.com
  // 12345678

  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [login, { loading }] = useLazyQuery(LOGIN_QUERY, {
    onError(err) {
      let errors = err.graphQLErrors[0].extensions?.errors;
      if (errors) {
        toast.error(errors[Object.keys(errors)[0]]);
      }
    },
    onCompleted(data: any) {
      localStorage.setItem("token", data.login.token);
      history.push("/chats");
    },
  });

  const onSubmit = (data: ILogin) => {
    login({ variables: { ...data } });
  };

  return (
    <SLogin>
      <div className="logo">
        <FontAwesomeIcon icon={faSms} color="white" size="8x" />
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <label className="form_input">
          <p>Email</p>
          <Input
            {...register("email", {
              required: globalMessages.validate.REQUIRED,
              pattern: {
                value: REGEX.EMAIL,
                message: globalMessages.validate.WRONG_PATTERN,
              },
            })}
          />
        </label>
        {errors.email && (
          <ErrorMessage color={theme.colors.primary.yellow}>
            {errors.email.message}
          </ErrorMessage>
        )}

        <label className="form_input">
          <p>Password</p>
          <Input
            type="password"
            {...register("password", {
              required: globalMessages.validate.REQUIRED,
              pattern: {
                value: REGEX.PASSWORD_ANY,
                message: globalMessages.validate.WRONG_PATTERN,
              },
            })}
          />
        </label>
        {errors.password && (
          <ErrorMessage color={theme.colors.primary.yellow}>
            {errors.password.message}
          </ErrorMessage>
        )}
        
        <p className="login_or_signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
        <Button type="submit" color="white" disabled={loading}>
          {loading ? <Loading /> : "Log in"}
        </Button>
      </form>
    </SLogin>
  );
}
