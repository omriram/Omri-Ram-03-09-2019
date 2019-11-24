import React from "react";
import "./DrawerMenu.scss";
import "../../../Global/SharedStyleElements.scss";
const DrawerMenu = ({ onChangePage }) => {
  return (
    <div className="drawer-menu">
      <button
        className="btn drawer-menu__btn"
        onClick={() => onChangePage("favorites")}
      >
        Favorites
      </button>
      <button
        className="btn drawer-menu__btn"
        onClick={() => onChangePage("home")}
      >
        Home
      </button>
    </div>
  );
};

export default DrawerMenu;
