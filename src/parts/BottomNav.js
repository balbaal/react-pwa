import React from "react";
import { withRouter } from "react-router-dom";

// Components
import { ButtonIcon } from "elements";

const BottomNav = (props) => {
  const { path } = props.match;

  const checkingCurrentPage = (page) => {
    if (page === path) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex items-center justify-around border border-gray-300 rounded py-2 bg-white shadow-inner">
      <ButtonIcon
        icon={<i className="fa fa-home fa-lg"></i>}
        title="Home"
        isActive={checkingCurrentPage("/")}
      />
      <ButtonIcon
        icon={<i className="fa fa-plus-circle fa-lg"></i>}
        title="Sell"
        isActive={checkingCurrentPage("/sell")}
      />
      <ButtonIcon
        icon={<i className="fa fa-bell fa-lg"></i>}
        title="Activity"
        isActive={checkingCurrentPage("/activity")}
      />
    </div>
  );
};

export default withRouter(BottomNav);
