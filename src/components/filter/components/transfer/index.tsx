import React, { ReactElement, useContext, useReducer } from "react";
import { MyContext, useFilterState } from "../../reducer/reduce";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { useSetVisible } from "../../hooks/setVisible";
import { ITransfer, ITransferList } from "../../interface";
import { Checkbox, Icon, IconButton, SvgIcon } from "@material-ui/core";

export const Transfer = (): ReactElement => {
  const { visible, setvisibleFalse, setvisibleTrue } = useSetVisible();
  const transferRef = React.useRef(null);
  const { state, dispatch } = useFilterState();
  const { transfer } = state;
  const resetTransfer = () => {
    dispatch({ type: "resetOne", key: "transfer" });
  };

  const handleMenuItemClick = (event: any, i: ITransferList) => {
    // setSelectedIndex(index);
    const clickKey = i.key;
    const newTransfer = JSON.parse(JSON.stringify(transfer));
    const { transferList } = newTransfer as ITransfer;
    transferList?.forEach((i, index) => {
      i.checked = i.key === clickKey ? !i.checked : false;
      if (i.checked) {
        newTransfer.default = i.value;
      }
    });
    dispatch({ type: "transfer", transfer: newTransfer });
    setvisibleFalse();
  };

  const handleToggle = () => {
    visible ? setvisibleFalse() : setvisibleTrue();
  };

  const handleClose = (event) => {
    if (transferRef.current && transferRef.current.contains(event.target)) {
      return;
    }
    setvisibleFalse();
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        ref={transferRef}
        onClick={handleToggle}
      >
        {transfer?.default}
        <ArrowDropDownIcon />
        {/* 删除按钮 */}
        <Icon onClick={resetTransfer}>
          HighlightOff
        </Icon>
      </Button>
      <Popper
        open={visible}
        anchorEl={transferRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <div>
                  <div>stop</div>
                  <MenuList id="split-button-menu">
                    {transfer?.transferList?.map((i, index) => {
                      return (
                        <MenuItem
                          onClick={(event) => handleMenuItemClick(event, i)}
                          value={i.key}
                        >
                          <Checkbox disabled={i.disabled} checked={i.checked} />
                          {i.value}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
