import React from "react";
import { Checkbox } from "./components/checkbox";
import "./index.css";
import { AlertWrap } from "@ctrip/corp_flight_h5_component";
import { Switch } from "antd-mobile";

export const DDD = () => {
  return (
    <>
      <div>
      <Switch />

        <h1 className="esbuild">zjw aaeaqlloaa, Esasdbuild!</h1>
      </div>
      <div>
        <Checkbox></Checkbox>
        <Checkbox checked={true}></Checkbox>
        <Checkbox indeterminate={true}></Checkbox>
      </div>
    </>
  );
};
