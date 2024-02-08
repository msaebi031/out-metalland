// mui
import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
//icons
import { MdOutlineCalendarMonth, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineUser, HiArrowLongRight, HiOutlineClock } from "react-icons/hi2";
// local
import { useCallback, useRef } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const SwiperCard = ({ title, button, data, pt }) => {
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
    <Box id="swiper-card" pt={pt}>
      {/* title & arrow */}
      <Box className="d-flex align-center justify-beetwen" pb={7}>
        <Typography component="h3" variant="title" sx={{ maxWidth: { sm: "430px", md: "initial" } }}>
          {title}
        </Typography>
        <Box>
          <MdKeyboardArrowLeft onClick={handlePrev} className="arrow border-rounded pointer" />
          <MdKeyboardArrowRight onClick={handleNext} className="arrow border-rounded pointer" />
        </Box>
      </Box>
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
            <Card sx={{ mb: 1 }}>
              <CardMedia image={event.img} className="w-100 img" />
              <CardContent className="content">
                <Typography color="dark.main" component="span" className="title">
                  {event.dic}
                </Typography>

                <Box className="d-flex align-center justify-beetwen" pt={2}>
                  <Box className="d-flex align-center">
                    <HiOutlineUser />
                    <Typography component="span">{event.admin}</Typography>
                  </Box>
                  <Typography component="span"> {event.admin}</Typography>
                </Box>

                <Box className="d-flex align-center justify-beetwen" pt={2}>
                  <Box className="d-flex align-center">
                    <MdOutlineCalendarMonth />
                    <Typography component="span">{event.day}</Typography>
                  </Box>
                  <Box className="d-flex align-center">
                    <HiOutlineClock />
                    <Typography component="span">{event.time}</Typography>
                  </Box>
                </Box>

                <Box className="pointer text-center" pt={2}>
                  <Link href="#">
                    <HiArrowLongRight className="arrow_long border-rounded" />
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Swiper */}

      {/* Button */}
      {button ? (
        <Box className="text-center" py={5}>
          <Button variant="contained" size="large" className="border-rounded">
            {button}
          </Button>
        </Box>
      ) : (
        ""
      )}
      {/* Button */}
    </Box>
  );
};

export default SwiperCard;
