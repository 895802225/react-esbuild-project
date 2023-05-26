import React from "react";
import "./index.scss";
// import { AlertWrap } from "@ctrip/corp_flight_h5_component";
import { Switch } from "antd-mobile";
import { Filter } from "./components/filter";
import GenderSelector from "./components/filter/components/sex";
import {NearCityRound, NoResultReasonNavigator, NearCitySingle, NearDate} from './components/filter/components/nearCity/index'
export const NearCity = () => {
  return (
    <>
      <NoResultReasonNavigator />
      <NearCitySingle />
      <NearDate />
      <NearCityRound />
    </>
  );
};
