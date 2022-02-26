import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

export function Questionaire3(props) {
  const [value, setValue] = useState(0);
  return (
    <div className="qn3-overall">
      <RangeSlider
        value={value}
        onChange={(changeEvent) => setValue(changeEvent.target.value)}
      />
    </div>
  );
}
