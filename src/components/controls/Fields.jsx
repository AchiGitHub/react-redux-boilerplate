import React from "react";

export const InputField = ({
  input,
  children,
  placeholder,
  className,
  type,
  userType,
  meta: { touched, error, warning },
  ...rest
}) => {
  switch (type) {
    case "select":
      return (
        <div>
          <select
            {...input}
            placeholder={placeholder}
            type={type}
            className={className}
            {...rest}
          >
            {children}
          </select>
          {touched &&
            ((error && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {error}
              </div>
            )) ||
              (warning && <span>{warning}</span>))}
        </div>
      );

    default:
      return (
        <div
          className="input-group sm-2 input-group-sm "
          style={{ background: "#1b1b1b" }}
        >
          {userType && (
            <div className="input-group-prepend">
              <div className="input-group-text">{userType}</div>
            </div>
          )}
          <input
            {...input}
            placeholder={placeholder}
            type={type}
            className={className}
            {...rest}
          />
          {touched &&
            ((error && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {error}
              </div>
            )) ||
              (warning && <span>{warning}</span>))}
        </div>
      );
  }
};
