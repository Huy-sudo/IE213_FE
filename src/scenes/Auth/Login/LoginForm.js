import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "./LoginForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function loginHandler(email, password) {

    }
  return (
    <div className={style.background}>
      <h1>LOG IN</h1>
      <Form className={style.loginform} onSubmit={loginHandler}>
        <Form.Group className={"mb-3"} controlId="formBasicEmail">
          <Form.Label className={style["login-label"]}>Email address</Form.Label>
          <Form.Control className={style["login-input"]} type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={style["login-label"]}>Password</Form.Label>
          <Form.Control className={style["login-input"]} type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember password" />
        </Form.Group>
        <Button className={style["login-button"]} variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
