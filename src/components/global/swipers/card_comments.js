// mui
import { Box, Typography, Card, CardContent, Avatar, Button } from "@mui/material";
//icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// local
import { useCallback, useRef } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const Card_Comments = ({ title, text, data }) => {
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
    <Box id="card-comments">
      {/* title & arrow */}
      <Box className="d-flex justify-beetwen align-center">
        <Typography component="h5" variant="h5" className="font-semibold" sx={{ maxWidth: { sm: "430px", md: "initial" } }}>
          {title}
        </Typography>
        <Box>
          <MdKeyboardArrowLeft onClick={handlePrev} className="arrow border-rounded pointer" />
          <MdKeyboardArrowRight onClick={handleNext} className="arrow border-rounded pointer" />
        </Box>
      </Box>
      <Typography pb={6} pt={3} color="dark.main" component="p" variant="body1" lineHeight={1.8}>
        {text}
      </Typography>
      {/* title & arrow */}

      {/* Swiper */}
      <Swiper
        ref={sliderRef}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          984: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((event, index) => (
          <SwiperSlide key={index}>
            <Card className="card-box text-center">
              <Avatar className="avatar" alt="Travis Howard" src={event.img} />
              <CardContent>
                <Typography color="primary.main" component="h6" variant="h6">
                  {event.name}
                </Typography>
                <Box className="d-flex justify-beetwen" py={1.7}>
                  <Typography color="primary.main" component="p" variant="body1">
                    {event.date}
                  </Typography>
                  <Typography color="primary.main" component="p" variant="body1">
                    {event.job}
                  </Typography>
                </Box>
                <Typography color="dark.main" component="p" variant="body1" lineHeight={1.8}>
                  {event.dic}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Swiper */}
    </Box>
  );
};

export default Card_Comments;
