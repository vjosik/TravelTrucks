"use client";

import { BsTruck } from "react-icons/bs";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.overlay}>
      <div className={css.loaderContainer}>
        
        <div className={css.carBody}>
          <BsTruck className={css.carIcon} />
        </div>
        
        
        <div className={css.road} />
        
        <p className={css.text}>Loading adventure...</p>
      </div>
    </div>
  );
};