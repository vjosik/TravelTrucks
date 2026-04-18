import React from "react";
import {
  LuWind,
  
  LuFuel,
  LuTv,
  LuCupSoda,
  LuRadio,
  LuDroplets,
  LuMicrowave,
  
} from "react-icons/lu";
import { MdOutlineShower } from "react-icons/md";
import { BsDiagram3, BsTruck } from "react-icons/bs";
import css from "./CamperFeatures.module.css";
import { Camper, DetailedCamper } from "../../types/campersType";

interface CamperFeaturesProps {
  camper: Camper | DetailedCamper;
  variant?: "compact" | "full";
}

const amenityIcons: Record<string, { label: string; icon: React.ReactNode }> = {
  ac: { label: "AC", icon: <LuWind /> },
  bathroom: { label: "Bathroom", icon: <MdOutlineShower /> },
  kitchen: { label: "Kitchen", icon: <LuCupSoda /> },
  tv: { label: "TV", icon: <LuTv /> },
  radio: { label: "Radio", icon: <LuRadio /> },
  microwave: { label: "Microwave", icon: <LuMicrowave /> },
  water: { label: "Water", icon: <LuDroplets /> },
};

export const CamperFeatures = ({
  camper,
  variant = "compact",
}: CamperFeaturesProps) => {
  return (
    <ul className={css.features_list}>
      
      <li className={css.feature_badge}>
        <BsDiagram3 />
        <span className={css.capitalize}>{camper.transmission}</span>
      </li>

      <li className={css.feature_badge}>
        <LuFuel />
        <span className={css.capitalize}>{camper.engine}</span>
      </li>

      <li className={css.feature_badge}>
        <BsTruck />
        <span className={css.capitalize}>{camper.form.replace("_", " ")}</span>
      </li>

      
      {variant === "full" &&
        camper.amenities &&
        camper.amenities.map((item: string) => {
          const iconData = amenityIcons[item];
          if (!iconData) return null;

          return (
            <li key={item} className={css.feature_badge}>
              {iconData.icon}
              <span>{iconData.label}</span>
            </li>
          );
        })}
    </ul>
  );
};
