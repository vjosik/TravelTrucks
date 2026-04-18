"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import css from "./CamperDetails.module.css";
import ImageGallery from "../../../components/ImageGallery/ImageGallery";
import { getCamperReviews, getCampersById } from "../../../lib/api";
import { CamperFeatures } from "../../../components/CamperFeatures/CamperFeatures";
import { FaStar } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import Container from "../../../components/Container/Container";
import { Reviews } from "../../../components/Review/Review";
import { BookingForm } from "../../../components/BookingForm/BookingForm";
import { Loader } from "../../../components/Loader/Loader";



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

  const {
    data: reviews,
    isLoading: isReviewsLoading,
  } = useQuery({
    queryKey: ["reviews", camperId],
    queryFn: () => getCamperReviews(camperId),
    enabled: !!camperId,
  });

  if (isLoading) return <Loader/>;
  if (isError || !camper) return <p>Error loading camper details.</p>;

  return (
    <Container>
      <div className={css.wrapper}>
        <div className={css.wrapper_left}>
          
            <ImageGallery gallery={camper.gallery} />
          
        </div>
        <div className={css.wrapper_right}>
          <div className={css.camper_info_card}>
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
            <div className={css.descriptionSection}>
              <p className={css.description}>{camper.description}</p>
            </div>
          </div>

          <div className={css.detailsGrid}>
            <div className={css.infoColumn}>
              <div className={css.details}>
                <h2 className={css.subTitle}>Vehicle details</h2>
                <div className={css.featuresWrapper}>
                  <CamperFeatures camper={camper} variant="full" />
                </div>
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
        </div>
      </div>

      <h2 className={css.reviews_title}>Reviews</h2>

      <div className={css.bottomSection}>
        
        <div className={css.reviewsColumn}>
          {isReviewsLoading ? (
            <p>Loading reviews...</p>
          ) : (
            <Reviews reviews={reviews || []} />
          )}
        </div>
        <div className={css.form_book}>
          <BookingForm camperId={camperId} />
        </div>
        
      </div>
    </Container>
  );
}