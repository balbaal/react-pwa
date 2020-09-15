import React from "react";

// Components
import { LoginForm } from "parts";

class Login extends React.Component {
  render() {
    return (
      <div className="max-w-screen-sm mx-auto px-5">
        <section className="flex flex-col items-center justify-center text-center mb-8 mt-3">
          <img alt="illusatration-login" src="/undraw_Security_on_ff2u.png" width={200} />
          <h1 className="text-gray-700 text-2xl leading-loose">Impact Terra</h1>
          <p className="text-gray-500 font-light text-xs leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </p>
        </section>
        <section>
          <LoginForm />
        </section>
        <h6
          style={{ bottom: "10px", left: "50%", transform: "translateX(-50%)" }}
          className="text-gray-400 text-xs text-center absolute"
        >
          Powered by <span className="text-gray-500 font-bold">React</span>
        </h6>
      </div>
    );
  }
}

export default Login;
