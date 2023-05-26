import React, { useState } from "react";
import "./index.css";

function GenderSelector() {
  const [selectedGender, setSelectedGender] = useState("");

  function handleMaleClick() {
    setSelectedGender("male");
  }

  function handleFemaleClick() {
    setSelectedGender("female");
  }

  return (
    <div className="gender-selector">
      <div className="buttons">
        <button onClick={handleMaleClick} className="male">Male</button>
        <button onClick={handleFemaleClick} className="female">Female</button>
      </div>
      {selectedGender === "male" && <p className="selected-gender">You have selected Male</p>}
      {selectedGender === "female" && <p className="selected-gender">You have selected Female</p>}
    </div>
  );
}

export default GenderSelector;
