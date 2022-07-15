import React from "react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="px-4 py-2 text-white bg-white border border-none rounded glass bg-opacity-5">
        <h5>{payload[0].value} contributions</h5>
        <p className="text-gray2">{label}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
