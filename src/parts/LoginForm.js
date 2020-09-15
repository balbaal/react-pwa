import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Components
import { InputText, Button } from "elements";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const __handleLogin = () => {
    console.log("email :>> ", email);
    console.log("password :>> ", password);

    if (!email || !password) return;

    props.history.push("/home");
  };

  return (
    <>
      <div className="mb-5">
        <InputText
          className="w-full"
          label="EMAIL"
          value={email}
          placeholder="Email Address"
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <InputText
          className="w-full"
          label="PASSWORD"
          value={password}
          placeholder="Password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <Button onClick={__handleLogin} title="Login" className="w-full" />
      </div>
    </>
  );
};

export default withRouter(LoginForm);
