import React from "react";
import { withRouter } from "react-router-dom";

// Components
import { Button } from "elements";

const Header = (props) => {
  return (
    <div
      onClick={() => props.history.push("/")}
      className="flex items-center justify-between px-3 py-3 bg-white max-w-screen-sm mx-auto cursor-pointer"
    >
      <img src="/impact+terra.png" alt="impact-terra" width="50px" />
      <Button className="text-xs rounded-md" title="Profile" />
    </div>
  );
};

export default withRouter(Header);
