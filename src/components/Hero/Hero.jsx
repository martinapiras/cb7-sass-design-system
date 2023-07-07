import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./Hero.module.scss";

const Hero = () => {
  const images = [
    { id: 1, url: "https://picsum.photos/300?1" },
    { id: 2, url: "https://picsum.photos/300?2" },
    { id: 3, url: "https://picsum.photos/300?3" },
    { id: 4, url: "https://picsum.photos/300?4" },
    { id: 5, url: "https://picsum.photos/300?5" },
  ];

  return (
    <div className={`${styles.Hero} col-12 col-xs-12`}>
      <div className={styles.container}>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
        >
          {images?.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.url}></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
