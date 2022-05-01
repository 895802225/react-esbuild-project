import React, { ReactElement } from "react";
import { render } from "react-dom";
import { DDD} from  './src/index';
// import Checkbox from "../components/checkbox";

function App(): ReactElement {
  return (
    <DDD />
  );
}

render(<App />, document.querySelector("#root"));

