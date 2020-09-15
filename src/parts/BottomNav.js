import React from "react";
import { withRouter } from "react-router-dom";

// Components
import { ButtonIcon } from "elements";

const BottomNav = (props) => {
  const { path } = props.match;
  const { push } = props.history;

  const checkingCurrentPage = (page) => {
    if (page === path) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex items-center justify-between px-3 pb-1 pt-3 max-w-screen-sm mx-auto">
      <ButtonIcon
        icon={<i className="fa fa-home fa-lg"></i>}
        title="Home"
        isActive={checkingCurrentPage("/")}
        onClick={() => push("/")}
      />
      <ButtonIcon
        icon={<i className="fa fa-plus-circle fa-lg"></i>}
        title="Sell"
        isActive={checkingCurrentPage("/sell")}
        onClick={() => push("/sell")}
      />
      <ButtonIcon
        icon={<i className="fa fa-bell fa-lg"></i>}
        title="Activity"
        isActive={checkingCurrentPage("/activity")}
        onClick={() => push("/activity")}
      />
    </div>
  );
};

export default withRouter(BottomNav);
