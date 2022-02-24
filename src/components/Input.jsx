import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import classes from "./Input.module.css";

const Input = ({
  error,
  disabled,
  value,
  startIcon,
  endIcon,
  size,
  fullWidth,
  multiline,
  row,
  label,
  inputType,
  inputPlaceholder,
  helperText,
}) => {
  const [val, setVal] = useState(value);
  const [formInput, setFormInput] = useState(null);
  const getVal = (e) => {
    setVal(e.target.value);
  };

  let groupClasses = `${classes["input-group"]} 
  ${error ? classes.error : ""}
  ${startIcon ? classes.startIcon : ""}
  ${endIcon ? classes.endIcon : ""}
  ${size === "sm" ? classes.sm : ""}
  ${size === "md" ? classes.md : ""}
  ${fullWidth ? classes.fullWidth : ''}
`;
  groupClasses = groupClasses
    .replace(/^\s+|\s+$/gm, "")
    .split("\n")
    .join(" ");

  useEffect(() => {
    if (!multiline) {
      setFormInput(
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          className={classes["input-control"]}
          disabled={disabled && disabled}
          onChange={getVal}
          value={value && val}
        />
      );
    } else {
      setFormInput(
        <textarea
          rows={row}
          placeholder={inputPlaceholder}
          className={classes["input-control"]}
          disabled={disabled && disabled}
          onChange={getVal}
          value={value && val}
        ></textarea>
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={groupClasses}>
      {formInput}
      {(startIcon || endIcon) && (
        <div className={classes.icon}>
          {startIcon ? startIcon : ""} {endIcon ? endIcon : ""}
        </div>
      )}
      <div className={classes["input-label"]}>{label}</div>
      {helperText && <div className={classes["help-msg"]}>{helperText}</div>}
    </div>
  );
};

Input.defaultProps = {
  label: "Label",
  inputType: "text",
  inputPlaceholder: "Placeholder",
};

Input.prototype = {
  label: PropTypes.string,
  inputType: PropTypes.string.isRequired,
};

export default Input;
