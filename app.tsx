import React, { ReactElement } from "react";
import { render } from "react-dom";
import { NearCity } from  './src/index';
import { Alert } from './src/components/alert'
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

let theme = createTheme();
theme = responsiveFontSizes(theme);

// import '@ctrip/corp_flight_h5_component/dist/bundle.css';

// import Checkbox from "../components/checkbox";

function App(): ReactElement {
  return (
    <>
        <NearCity />
        {/* <Alert /> */}
    </>
  );
}

render(<App />, document.querySelector("#root"));

