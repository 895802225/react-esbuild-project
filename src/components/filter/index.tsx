import React, { useEffect, useReducer } from "react";
import { ChangeEvent, CSSProperties, ReactElement } from "react";
import { defaultContext, initReducer, MyContext, Action, initState } from "./reducer/reduce";
import { Time } from "./components/time";
import { IState, ITransfer } from "./interface";
import { Transfer } from "./components/transfer";
// type Reducer<S, A> = (prevState: S, action: IAction) => S;

export const Filter = (): ReactElement => {
    //@ts-ignore
    const [state, dispatch] = useReducer(initReducer, initState)
    useEffect(()=> {
        const transfer: ITransfer = {
            default: 'Transfer',
            tansferList: [
              {
                key: 'any',
                value: 'Any number of stops',
                checked: false,
                disabled: false
              }
            ],
            duration: '00-00'
        };
        //@ts-ignore
        dispatch({type: 'transfer', transfer})
      }, [])
    return (
        <MyContext.Provider value={{state, dispatch}}>
            {/* <div>{state.count}</div> */}
            {/* <div onClick={add}> 增加3</div> */}
            <Transfer />
            <Time />
        </MyContext.Provider>
    );
};

