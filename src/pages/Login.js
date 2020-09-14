import React from "react";
import Logo from "logo.svg";

class Login extends React.Component {
  render() {
    return (
      <div className="max-w-screen-sm mx-auto">
        <section className="flex flex-col items-center justify-center text-center">
          <img src={Logo} width={250} />
          <h1 className="text-gray-700 font-light text-2xl leading-loose">Authenticator</h1>
          <p className="text-gray-500 font-light text-xs leading-tight">
            Protect your account in just a few minutes <br /> by reviewing
            security settings <br /> and activity.
          </p>
        </section>
        <section>login form</section>
      </div>
    );
  }
}

export default Login;
