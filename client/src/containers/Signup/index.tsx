import { useMutation } from "@apollo/client";
import { faSms } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SSignup from "./styles";
import { REGISTER_MUTATION } from "./queries";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { ISignup } from "./types";
import globalMessages from "../../utils/globalMessages";
import ErrorMessage from "../../components/ErrorMessage";
import REGEX from "../../utils/regex";
import theme from "../../common/theme";

export default function Signup() {
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [signup, { loading }] = useMutation(REGISTER_MUTATION, {
    onCompleted() {
      toast.success("Sign up successfully");
      history.push("/login");
    },
    onError(err) {
      let errors = err.graphQLErrors[0].extensions?.errors;
      if (errors) {
        toast.error(errors[Object.keys(errors)[0]]);
      }
    },
  });

  const watchPassword = watch("password");

  const onSubmit = (data: ISignup) => {
    signup({ variables: { ...data } });
  };

  return (
    <SSignup>
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
          <p>Username</p>
          <Input
            {...register("username", {
              required: globalMessages.validate.REQUIRED,
              pattern: {
                value: REGEX.USER_NAME,
                message: globalMessages.validate.WRONG_PATTERN,
              },
            })}
          />
        </label>
        {errors.username && (
          <ErrorMessage color={theme.colors.primary.yellow}>
            {errors.username.message}
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

        <label className="form_input">
          <p>Confirm password</p>
          <Input
            type="password"
            {...register("confirmPassword", {
              required: globalMessages.validate.REQUIRED,
              pattern: {
                value: REGEX.PASSWORD_ANY,
                message: globalMessages.validate.WRONG_PATTERN,
              },
              validate: (value) =>
                value === watchPassword ||
                globalMessages.validate.PASSWORD_NOT_MATCH,
            })}
          />
        </label>
        {errors.confirmPassword && (
          <ErrorMessage color={theme.colors.primary.yellow}>
            {errors.confirmPassword.message}
          </ErrorMessage>
        )}

        <p className="login_or_signup">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
        <Button type="submit" color="white" disabled={loading}>
          {loading ? <Loading /> : "Sign up"}
        </Button>
      </form>
    </SSignup>
  );
}
