import Image from "next/image";
import { Camper } from "../../types/campersType";
import css from "./CamperCard.module.css";
import { FaStar } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import { CamperFeatures } from "../CamperFeatures/CamperFeatures";

import Button from "../UI/Button/Button";

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <li className={css.card}>
      <div className={css.image_wrapper}>
        <Image
          src={camper.coverImage}
          alt={camper.name}
          fill
          className={css.image}
        />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.name}>{camper.name}</h2>
          <div className={css.price_block}>
            <p className={css.price}>€{camper.price}</p>
          </div>
        </div>
        <div className={css.meta}>
          <div className={css.rating}>
            <FaStar className={css.star_icon} fill="#ffc531 " />
            <span className={css.span_typography}>
              {camper.rating}({camper.totalReviews} Reviews)
            </span>
          </div>
          <div className={css.location}>
            <HiOutlineMapPin />
            <span className={css.span_typography}>{camper.location}</span>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <CamperFeatures camper={camper} />
        <Button
          text="Show more"
          href={`/catalog/${camper.id}`}
          target="_blank"
        />
      </div>
    </li>
  );
}
