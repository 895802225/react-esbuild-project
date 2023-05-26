import React, { useEffect, useReducer } from "react";
import { ChangeEvent, CSSProperties, ReactElement } from "react";
import { defaultContext, initReducer, MyContext, Action, initState } from "./reducer/reduce";
import { Time } from "./components/time";
import { useImmerReducer } from "use-immer";
import { EnumTransfer, IState, ITransfer } from "./interface";
import { Transfer } from "./components/transfer";
import { Airport } from "./components/airport";
// type Reducer<S, A> = (prevState: S, action: IAction) => S;

export const Filter = (): ReactElement => {
    //@ts-ignore
    const [state, dispatch] = useImmerReducer(initReducer, initState)
    useEffect(()=> {
        defaultOptions();
      }, [])
    const resetAll = () => {
        dispatch({type: 'resetAll'})
    }
    const defaultOptions = () => {
        const transfer: ITransfer = {
            default: 'Transfer',
            transferList: [
              {
                key: EnumTransfer.Any,
                value: 'Any number of stops',
                checked: true,
                disabled: false
              },
              {
                key:EnumTransfer.NonStop,
                value: 'Nonstop only',
                checked: false,
                disabled: false
              },
              {
                key: EnumTransfer.Stop1Few,
                value: '1 stop of fewer',
                checked: false,
                disabled: false
              },
              {
                key: EnumTransfer.Stop2Few,
                value: '2 stop of fewer',
                checked: false,
                disabled: false
              }
              ,{
                key: EnumTransfer.aaa,
                value: '偶遇过',
                checked: true,
                disabled: false
              }
            ],
            duration: '00-00'
        };
        //@ts-ignore
        dispatch({type: 'init', state: {transfer}})
    }
    return (
        <MyContext.Provider value={{state, dispatch}}>
            {/* <div>{state.count}</div> */}
            {/* <div onClick={add}> 增加3</div> */}
            <Transfer />
            <Transfer />
            <Airport></Airport>
            <Time />
            <span onClick={resetAll}>{'Clear'}</span>
        </MyContext.Provider>
    );
};

