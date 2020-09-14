import React from "react";

// Components
import { Button } from "elements";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-3 py-3 bg-white max-w-screen-sm mx-auto">
      <img src="/impact+terra.png" alt="impact-terra" width="50px" />
      <Button className="text-xs rounded-md" title="Profile" />
    </div>
  );
};

export default Header;
