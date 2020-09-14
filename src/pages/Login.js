import React from "react";
import Logo from "logo.svg";

// Components
import { LoginForm } from "parts";

class Login extends React.Component {
  render() {
    return (
      <div className="max-w-screen-sm mx-auto px-10">
        <section className="flex flex-col items-center justify-center text-center mb-5">
          <img src={Logo} width={250} />
          <h1 className="text-gray-500 font-light text-2xl leading-loose">
            Authenticator
          </h1>
          <p className="text-gray-500 font-light text-xs leading-tight">
            Protect your account in just a few minutes by reviewing security
            settings and activity.
          </p>
        </section>
        <section>
          <LoginForm />
        </section>
      </div>
    );
  }
}

export default Login;
