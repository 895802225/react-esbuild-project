export interface IState {
  transfer?: ITransfer;
  time?: ITime;
  airline?: IAirline;
  airport?: IAirPort;
  baggage?: IBaggage;
  policy?: IPolicy;
  price?: IPrice;
  sort?: ISort;
}

// transfer 中转经停
export interface ITransfer {
  default: string;
  tansferList: ICheckList[];
  /**
   * hh-mm
   */
  duration: string; 
}

export enum EnumTransfer {
  All = "All", // 默认选中any number of stops，不限不回显状态
  NonStop = "NonStop", // 仅直飞，选中时stopover duration置灰
  Stop1Few = "Stop1Few",
  Stop2Few = "Stop2Few",
}

export interface ITransferList {
  key: EnumTransfer;
  value: string; // 文案
}

// time 时间筛选
export interface ITime {
  toalDuration: string; // hh-mm , time回显
  bound: EnumBound; // 往返打包
  departTime: ITimeInterval;
  arriveTime: ITimeInterval;
}

export enum EnumBound {
  OutBound = "OutBound",
  InBound = "InBound",
  None = "None",
}

export interface ITimeInterval {
  startTime: string; // hh-mm
  endTime: string;
}

// Airline 航司
export interface IAirline {
  default: string;
  airlineUnionCheckList: IairlineUnionCheckList[];
  airlineCheckList: ICheckList[];
  selectAll: boolean; // 默认全选
}

export interface IairlineUnionCheckList extends ICheckList {
  subAirlinelist: string[]; // 航司联盟的code string
}

// Airport 机场
export interface IAirPort {
  default: string;
  departAirPort: ICheckList[];
  arriveAirport: ICheckList[];
  AirportList: ICityAirport[];
}

export interface ICityAirport {
  key: string; // city
}

// 基础渲染:列表
export interface ICheckList {
  key: string; //航司code
  value: string; // 航司名，或者航司联盟名称
  checked: boolean;
  disabled: boolean; // 是否禁止
}
// 基础渲染:数字选择
export interface ICountList {
  key: string;
  value: string;
  count: number;
}
// 行李筛选
export interface IBaggage {
  default: string;
  baggageList: ICountList[];
}
// policy筛选

export interface IPolicy {
  inPolicy: boolean;
}
// price筛选
export interface IPrice {
  priceList: ICheckList;
}

// ISort
export interface ISort {
  sortList: ISortItem[];
  default:string;
}

export interface ISortItem {
  key: string; // Recommended
  content: string; //Recommended
  price: string; // $1232131
}
