import { Camper } from "../../types/campersType";
import CamperCard from "../CamperCard/CamperCard";
import css from './CamperList.module.css'

export default function CamperList({ campers }: { campers: Camper[] }) {
  return (
    <ul className={css.card_list}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </ul>
  );
}
