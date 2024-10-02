import React from "react";
import "./NewHeaderDesignV2.scss";
import { cheap_it_family_logo } from "../../assets/images";
import { LanguageSwitchV2 } from "../LanguageSwitchV2/LanguageSwitchV2";

export const NewHeaderDesignV2: React.FC = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo-container">
          <div className="header__logo">
            <img
              className="header__logo-image"
              src={cheap_it_family_logo}
              alt="Chip It Family Logo. Green Basket with the text Chip It Family under it."
            />
            <h3 className="header__logo-text">
              Cheap <span>IT Fa</span>mily
            </h3>
          </div>
        </div>
        <div className="header__language-switch-container">
          <LanguageSwitchV2 />
        </div>
      </div>
    </>
  );
};
