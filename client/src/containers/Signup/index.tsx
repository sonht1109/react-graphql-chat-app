import { useMutation } from "@apollo/client";
import { faSms } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SSignup from "./styles";
import { REGISTER_MUTATION } from "./queries";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import REGEX from "../../utils/regex";

export default function Signup() {
  const history = useHistory();

  const [register, { loading }] = useMutation(REGISTER_MUTATION, {
    update(_, __) {
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

  const [info, setInfo] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: any) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setInfo({ ...info, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    register({ variables: { ...info } });
  };

  return (
    <SSignup>
      <div className="logo">
        <FontAwesomeIcon icon={faSms} color="white" size="8x" />
      </div>
      <form className="form" onSubmit={onSubmit}>
        <label className="form_input">
          <p>Email</p>
          <Input name="email" onChange={onChange} value={info.email} />
        </label>
        <label className="form_input">
          <p>Username</p>
          <Input name="username" onChange={onChange} value={info.username} />
        </label>
        <label className="form_input">
          <p>Password</p>
          <Input
            name="password"
            type="password"
            onChange={onChange}
            value={info.password}
          />
        </label>
        <label className="form_input">
          <p>Confirm password</p>
          <Input
            name="confirmPassword"
            type="password"
            onChange={onChange}
            value={info.confirmPassword}
          />
        </label>
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
