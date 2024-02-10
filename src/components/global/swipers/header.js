import { Box } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Swiper_Header = ({ clas_bg, slid }) => {
  return (
    <Box id="swiper-header">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper-header"
      >
        {clas_bg.map((items, index) => (
          <SwiperSlide key={index} className={items.name}>
            {slid}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Swiper_Header;
