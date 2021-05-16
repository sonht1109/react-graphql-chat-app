import { useLazyQuery } from "@apollo/client";
import { faSms } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SLogin from "./styles";

export default function Login() {
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
    console.log(info);
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
        <Button onClick={onSubmit} color="white">
          Log in
        </Button>
      </div>
    </SLogin>
  );
}
