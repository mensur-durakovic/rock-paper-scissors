import React from "react";

const Pick = (props) => {
  const { name, description, isLoadingDot } = props;

  let classes = `pick pick-${name.toLowerCase()}`;
  if (isLoadingDot) {
    classes = `pick loading-dot loading-dot-${name.toLowerCase()}`;
  }

  return (
    <div className="pick-wrapper">
      <div className={classes}></div>
      <div className="pick-description">{description}</div>
    </div>
  );
};

export default Pick;
