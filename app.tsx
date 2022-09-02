import React, { ReactElement } from "react";
import { render } from "react-dom";
import { DDD} from  './src/index';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

let theme = createTheme();
theme = responsiveFontSizes(theme);

// import '@ctrip/corp_flight_h5_component/dist/bundle.css';

// import Checkbox from "../components/checkbox";

function App(): ReactElement {
  return (
    <>
        <DDD />
        <Button variant="contained" color="primary">
      你好，世界
    </Button>
    </>
  );
}

render(<App />, document.querySelector("#root"));

