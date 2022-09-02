import React, { ReactElement, useContext, useReducer } from "react";
import { MyContext } from "../../reducer/reduce";

export const Price = (): ReactElement => {
    const {state, dispatch} = useContext(MyContext)
 
    return (
        <></>
    );
};

