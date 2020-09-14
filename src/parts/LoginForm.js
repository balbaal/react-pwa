import React from "react";

// Components
import { InputText, Button } from "elements";

const LoginForm = () => {
  return (
    <>
      <div className="mb-5">
        <InputText
          className="w-full"
          label="EMAIL"
          value=""
          placeholder="Email Address"
          type="text"
          name="email"
        />
      </div>

      <div className="mb-5">
        <InputText
          className="w-full"
          label="PASSWORD"
          value=""
          placeholder="Password"
          type="text"
          name="password"
        />
      </div>

      <div>
        <Button title="Login" className="w-full" />
      </div>
    </>
  );
};

export default LoginForm;
