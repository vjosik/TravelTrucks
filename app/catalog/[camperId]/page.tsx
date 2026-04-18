"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import css from "./CamperDetails.module.css";
import ImageGallery from "../../../components/ImageGallery/ImageGallery";
import { getCampersById } from "../../../lib/api";
import { CamperFeatures } from "../../../components/CamperFeatures/CamperFeatures";
import { FaStar } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import Container from "../../../components/Container/Container";

// Вспомогательная функция для красивого отображения текста (panel_van -> Panel van)
const formatValue = (text: string) => {
  return text.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

export default function CamperDetailsPage() {
  const { camperId } = useParams<{ camperId: string }>();

  const {
    data: camper,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getCampersById(camperId),
    enabled: !!camperId,
  });

  if (isLoading) return <p className={css.loading}>Loading...</p>;
  if (isError || !camper) return <p>Error loading camper details.</p>;

  return (
    <Container>
      {/* Заголовок и основная инфо */}
      <div className={css.header}>
        <h1 className={css.title}>{camper.name}</h1>
        <div className={css.meta}>
          <div className={css.rating}>
            <FaStar className={css.star_icon} fill="#ffc531" />
            <span>
              {camper.rating} ({camper.totalReviews} Reviews)
            </span>
          </div>
          <div className={css.location}>
            <HiOutlineMapPin />
            <span>{camper.location}</span>
          </div>
        </div>
        <p className={css.price}>€{camper.price.toFixed(2)}</p>
      </div>

      {/* Галерея */}
      <div className={css.gallerySection}>
        <ImageGallery gallery={camper.gallery} />
      </div>

      {/* Описание */}
      <div className={css.descriptionSection}>
        <p className={css.description}>{camper.description}</p>
      </div>

      {/* Контентная часть: Особенности + Форма */}
      <div className={css.detailsGrid}>
        <div className={css.infoColumn}>
          {/* Переиспользуем твой компонент с иконками */}
          <div className={css.featuresWrapper}>
            <CamperFeatures camper={camper} variant="full" />
          </div>

          {/* Технические характеристики */}
          <div className={css.details}>
            <h2 className={css.subTitle}>Vehicle details</h2>
            <hr className={css.divider} />
            <ul className={css.detailsList}>
              <li>
                <span>Form</span>
                <span>{formatValue(camper.form)}</span>
              </li>
              <li>
                <span>Length</span>
                <span>{camper.length}</span>
              </li>
              <li>
                <span>Width</span>
                <span>{camper.width}</span>
              </li>
              <li>
                <span>Height</span>
                <span>{camper.height}</span>
              </li>
              <li>
                <span>Tank</span>
                <span>{camper.tank}</span>
              </li>
              <li>
                <span>Consumption</span>
                <span>{camper.consumption}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Правая колонка для формы бронирования */}
      <aside className={css.sidebar}>
        {/* Сюда мы вставим <BookingForm camperId={camperId} /> на следующем этапе */}
        <div className={css.sticky_sidebar}>{/* Заглушка для формы */}</div>
      </aside>
    </Container>
  );
}
