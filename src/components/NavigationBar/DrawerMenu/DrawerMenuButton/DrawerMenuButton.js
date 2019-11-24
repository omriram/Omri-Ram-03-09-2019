import React from "react";
import "./DrawerMenuButton.scss";
const DrawerMenuButton = ({ onClikDrawerMenu }) => {
  return (
    <button className="drawer-button" onClick={onClikDrawerMenu}>
      <div className="drawer-button__line" />
      <div className="drawer-button__line" />
      <div className="drawer-button__line" />
    </button>
  );
};

export default DrawerMenuButton;
