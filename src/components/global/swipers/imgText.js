// mui
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
//icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// local
import { useCallback, useRef } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const ImgText = ({ data }) => {
  const sliderRef = useRef(null);

  //handle prev & previous slider
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  //handle next & previous slider
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Box id="img-text">
      {/* title & arrow */}
      <Box className="d-flex arrows">
        <MdKeyboardArrowLeft onClick={handlePrev} className="arrow border-rounded pointer" />
        <MdKeyboardArrowRight onClick={handleNext} className="arrow border-rounded pointer" />
      </Box>
      {/* title & arrow */}

      {/* Swiper */}
      <Swiper
        ref={sliderRef}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          984: {
            slidesPerView: 4,
          },
        }}
      >
        {data?.map((event, index) => (
          <SwiperSlide key={index}>
            <Link href={event.href}>
              <Card className="card-box text-center">
                <CardMedia component="img" height="240" image={event.img || "/img/depression/no-photo.png"} alt="green iguana" />
                <CardContent>
                  <Typography py={3} color="primary.main" component="h6" variant="h6">
                    {event.name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Swiper */}
    </Box>
  );
};

export default ImgText;
