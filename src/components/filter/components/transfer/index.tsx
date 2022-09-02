import React, { ReactElement, useContext, useEffect, useReducer } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSetVisible } from "../../hooks/setVisible";
// import "./index.scss";
import { useFilterState } from "../../reducer/reduce";
import InputLabel from "@material-ui/core/InputLabel";
import { ITransfer } from "../../interface";

export const Transfer = (): ReactElement | null => {
  const { visible, setvisibleFalse, setvisibleTrue } = useSetVisible();
  const { state, dispatch } = useFilterState();
  const { transfer } = state;
  const handleChange = (value) => {
    const clickKey = value.target.value;
    const newTransfer = {...transfer} as ITransfer
    newTransfer?.tansferList?.forEach((i, index) => {
        i = {
            ...i,
            checked: i.key === clickKey ? !i.checked : false
        }
        if(i.checked) {
            newTransfer.default = i.value
        }
    })
    console.log('newTransfer', newTransfer)
    dispatch({type:'transfer', transfer: newTransfer})
  };
  if (!transfer) {
    return null;
  }
  console.log("transfer", transfer);
  return (
    <FormControl variant="filled" className={"transfer"}>
        <InputLabel id="demo-simple-select-outlined-label">{transfer.default}</InputLabel>

      <Select
        value={transfer.default}
        onChange={handleChange}
        displayEmpty={false}
        className={"transfer"}
      >
        

        {transfer?.tansferList?.map((i, index) => {
          return <MenuItem value={i.key}>{i.value}</MenuItem>;
        })}
        {/* <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}
      </Select>
      
      {/* <FormHelperText>{}</FormHelperText> */}
    </FormControl>
  );
};
