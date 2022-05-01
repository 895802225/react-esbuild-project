import React from "react";
import { ChangeEvent, CSSProperties, ReactElement } from "react";

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  checked = false,
  indeterminate = false,
  className = "",
  style = {},
  disabled = false,
  onChange,
}: CheckboxProps): ReactElement => {
  return (
    <input
      type="checkbox"
      className={className}
      style={style}
      ref={(input) => {
        if (input) {
          input.checked = checked;
          input.indeterminate = indeterminate as boolean;
          input.disabled = disabled as boolean;
        }
      }}
      onChange={(e) => {
        if (onChange) {
            console.log(e)
          onChange(e);
        }
      }}
    />
  );
};

export default Checkbox;

