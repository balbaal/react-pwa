import React from "react";

const ButtonIcon = (props) => {
  const { icon, title, isActive } = props;
  const classNames =
    "flex flex-col items-center justify-center text-gray-600 cursor-pointer";

  return (
    <div
      onClick={props.onClick}
      className={[classNames, isActive ? "text-green-700" : null].join(" ")}
    >
      {icon}
      <h6 className="mt-1" style={{ fontSize: 11 }}>
        {title}
      </h6>
    </div>
  );
};

export default ButtonIcon;
