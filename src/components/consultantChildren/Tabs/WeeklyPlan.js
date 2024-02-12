import { TabPanel } from "@mui/lab";
import { Box, Typography, FormControlLabel, Checkbox } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useCallback, useEffect, useRef, useState } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { SetInformation } from "@/src/redux/doctor/action";

const WeeklyPlan = () => {
  const { t } = useTranslation("consultantchildren");

  const [days, setDays] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const sliderRef = useRef(null);

  // redux
  const { data } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  const handleCheckboxChange = (day) => {
    setCheckedItems((prevState) => {
      // اگر مقدار موجود بود، آن را پاک کنید
      if (prevState.hasOwnProperty(day)) {
        const { [day]: deletedItem, ...rest } = prevState;
        return rest;
      }
      // در غیر این صورت، مقدار جدید را اضافه کنید
      return {
        ...prevState,
        [day]: true, // یا هر مقدار دلخواه دیگر
      };
    });
  };

  useEffect(() => {
    dispatch(SetInformation(checkedItems, "times"));
  }, [checkedItems]);

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

  useEffect(() => {
    const { days, list } = addDayIndex(data?.time);
    // آرایه‌ای از روزهای مورد نظر
    const dataOfWeek = [];

    let currentDate = moment(); // تاریخ فعلی
    let endOf30Days = moment().add(30, "days"); // تاریخ 30 روز بعد از تاریخ فعلی

    while (currentDate.isBefore(endOf30Days)) {
      const dayIndex = currentDate.day(); // شناسه‌ی روز هفته فعلی

      if (list.includes(dayIndex)) {
        // اگر روز هفته در آرایه روزهای مورد نظر باشد
        const find = days.find((e) => e.dayIndex === dayIndex);
        dataOfWeek.push({ title: currentDate.format("dddd, DD MMMM"), day: find?.time });
      }
      currentDate.add(1, "days"); // افزودن یک روز به تاریخ فعلی
    }
    setDays(dataOfWeek);
  }, []);

  const addDayIndex = (arr) => {
    const list = [];
    arr.forEach((item) => {
      const dayIndex = moment().isoWeekday(item.day).isoWeekday();
      item.dayIndex = dayIndex;
      list.push(dayIndex);
    });
    return { days: arr, list };
  };

  return (
    <TabPanel className="tabpane3" value="3">
      <Box>
        <Box className="d-flex justify-beetwen align-center">
          <Typography py={3} className="font-bold" variant="body1" color="primary.main" component="p">
            All times are presented in 24-hour format (For example, 2:00 is 2:00am)
          </Typography>
          <Box>
            <MdKeyboardArrowLeft onClick={handlePrev} className="arrow border-rounded pointer" />
            <MdKeyboardArrowRight onClick={handleNext} className="arrow border-rounded pointer" />
          </Box>
        </Box>

        <Swiper
          ref={sliderRef}
          slidesPerView={5}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            984: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={20}
          className="swiper-child"
        >
          {days.map((item, index) => (
            <SwiperSlide key={index}>
              <Typography py={1.3} variant="body1" component="p" color="light.main" className="font-bold text-center slide-title">
                {item.title}
              </Typography>
              <Box className="box-form">
                {item.day.map((dayItem, ins) => (
                  <FormControlLabel
                    key={(ins + 1) * 1000}
                    control={
                      <Checkbox
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<RadioButtonChecked />}
                        checked={checkedItems[`${item.title} ${dayItem} ${t("clock")}`]} // استفاده از وضعیت مربوط به روز موردنظر
                        onChange={() => handleCheckboxChange(`${item.title} ${dayItem} ${t("clock")}`)} // استفاده از تابع مربوط به روز موردنظر
                        className="border-rounded"
                      />
                    }
                    label={dayItem}
                  />
                ))}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </TabPanel>
  );
};

export default WeeklyPlan;
