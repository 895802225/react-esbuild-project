// 模块内数据 usecontext, useducer, filter模块与其他模块通信事件
import { createContext, ReducerStateWithoutAction, ReducerWithoutAction, useContext } from "react";
import {
  IAirline,
  IAirPort,
  IBaggage,
  IPolicy,
  IPrice,
  ISort,
  IState,
  ITime,
  ITransfer,
} from "../interface";

export interface IContext {
  state: IState;
  dispatch: (action: Action) => void;
}

export const initState ={
} 

export const defaultContext: IContext = {
  state: initState,
  dispatch: (_: Action) => {},
};

export type Action =
  | { type: "reset" }
  | { type: "init"; state: IState }
  | { type: "transfer"; transfer: ITransfer }
  | { type: "time"; time: ITime }
  | { type: "airline"; airline: IAirline }
  | { type: "airport"; airport: IAirPort }
  | { type: "baggage"; baggage: IBaggage }
  | { type: "policy"; policy: IPolicy }
  | { type: "sort"; sort: ISort }
  | { type: "price"; price: IPrice };

export const initReducer = (state: IState, action: Action) => {
  switch (action.type) {
    // case "reset":
    //   return defaultContext.state;
    case "init":
      return { ...action.state };
    case "transfer":
      return { ...state, transfer: action.transfer };
    case "time":
      return { ...state, transfer: action.time };
    case "airline":
      return { ...state, transfer: action.airline };
    case "airport":
      return { ...state, transfer: action.airport };
    case "baggage":
      return { ...state, transfer: action.baggage };
    case "policy":
      return { ...state, transfer: action.policy };
    case "sort":
      return { ...state, transfer: action.sort };
    case "price":
      return { ...state, transfer: action.price };
    default:
      return state;
  }
};

export const MyContext = createContext<IContext>(defaultContext);

export const useFilterState = () => {
  return useContext(MyContext);
};
