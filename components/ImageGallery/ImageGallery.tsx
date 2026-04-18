"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { CamperGallery } from "../../types/campersType";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ gallery }: { gallery: CamperGallery[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.wrapper}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.mainSwiper}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={css.imageMainContainer}>
              <img src={item.original} alt={`Camper view ${index + 1}`} className={css.main_image}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={32}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.thumbsSwiper}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index} className={css.thumbSlide}>
            <div className={css.imageThumbContainer}>
               <img src={item.thumb} alt={`Thumbnail ${index + 1}`} className={css.secondary_image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}