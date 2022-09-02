import React, { ReactElement, useContext, useReducer } from "react";
import { MyContext } from "../reducer/reduce";

export const Time = (): ReactElement => {
    const {state, dispatch} = useContext(MyContext)
    const mu =()=> {
    }
    return (
        <MyContext.Provider value={{state, dispatch}}>
            {/* <div>{state.count}</div> */}
            <div onClick={mu}> 减少2</div>
        </MyContext.Provider>
    );
};

