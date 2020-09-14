import React from "react";

// Components
import { InputText } from "elements";

const LoginForm = () => {
  return (
    <>
      <div className="mb-3">
        <InputText
          className="w-full"
          label="EMAIL"
          value=""
          placeholder="Email Address"
          type="text"
          name="email"
        />
      </div>

      <div className="mb-3">
        <InputText
          className="w-full"
          label="PASSWORD"
          value=""
          placeholder="Password"
          type="text"
          name="password"
        />
      </div>
    </>
  );
};

export default LoginForm;
