import React from "react";
import { withRouter } from "react-router-dom";

// Components
import { Button } from "elements";

const Header = (props) => {
  return (
    <div className="flex items-center justify-between px-3 py-3 bg-white max-w-screen-sm mx-auto cursor-pointer">
      <img
        onClick={() => props.history.push("/home")}
        src="/impact+terra.png"
        alt="impact-terra"
        width="50px"
      />
      <Button
        onClick={() => props.history.push("/")}
        className="text-xs rounded-md"
        title="Sign Out"
      />
    </div>
  );
};

export default withRouter(Header);
