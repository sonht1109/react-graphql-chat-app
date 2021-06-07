import { useLazyQuery } from "@apollo/client";
import { faSms } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SLogin from "./styles";
import { LOGIN_QUERY } from "./queries";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";

export default function Login() {
  // sonht@mailinator.com
  // 123456

  const history = useHistory()

  const [login, { loading }] = useLazyQuery(LOGIN_QUERY, {
    onError(err) {
      let errors = err.graphQLErrors[0].extensions?.errors;
      if (errors) {
        toast.error(errors[Object.keys(errors)[0]]);
      }
    },
    onCompleted(data: any){
      localStorage.setItem('jwt', data.login.token)
      history.push('/chats')
    }
  });

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: any) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setInfo({ ...info, [name]: value });
  };

  const onSubmit = () => {
    login({ variables: { ...info } });
  };

  return (
    <SLogin>
      <div className="logo">
        <FontAwesomeIcon icon={faSms} color="white" size="8x" />
      </div>
      <div className="form">
        <label className="form_input">
          <p>Email</p>
          <Input name="email" onChange={onChange} value={info.email} />
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
        <p className="login_or_signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
        <Button onClick={onSubmit} color="white" disabled={loading}>
          {loading ? <Loading /> : "Log in"}
        </Button>
      </div>
    </SLogin>
  );
}
