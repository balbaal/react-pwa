import React from "react";
import PropTypes from "prop-types";

const InputText = (props) => {
  const { value, placeholder, name, type, className, label, useLabel } = props;

  return (
    <>
      {useLabel ? (
        <label className="text-sm font-semibold text-gray-500 mb-1 block">
          {label}
        </label>
      ) : null}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={props.onChange}
        className={[
          className,
          "px-4 py-2 bg-green-100 text-sm text-gray-400 focus:text-gray-700 rounded border-none outline-none",
        ].join(" ")}
      />
    </>
  );
};

InputText.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  useLabel: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputText;
