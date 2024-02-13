import { Box, Container } from "@mui/material";
import SwiperCard from "../global/swipers/card";
// local
import useTranslation from "next-translate/useTranslation";

const PublicSeminar = () => {
  const { t } = useTranslation("psychology");
  const data = [
    {
      img: "/img/psychology/servise/aduls.png",
      dic: "Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla eu quisque. Ac vitae tellus tincidunt nibh non accumsan urna.",
      admin: "Lorem ipsum dolor",
      day: "Sunday,January 20,2023",
      time: "3:00 pm",
    },
    {
      img: "/img/psychology/servise/children.png",
      dic: "Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla eu quisque. Ac vitae tellus tincidunt nibh non accumsan urna.",
      admin: "Lorem ipsum dolor",
      day: "Sunday,January 20,2023",
      time: "3:00 pm",
    },
    {
      img: "/img/psychology/servise/public.png",
      dic: "Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla eu quisque. Ac vitae tellus tincidunt nibh non accumsan urna.",
      admin: "Lorem ipsum dolor",
      day: "Sunday,January 20,2023",
      time: "3:00 pm",
    },
    {
      img: "/img/psychology/servise/specialized.png",
      dic: "Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla eu quisque. Ac vitae tellus tincidunt nibh non accumsan urna.",
      admin: "Lorem ipsum dolor",
      day: "Sunday,January 20,2023",
      time: "3:00 pm",
    },
  ];

  return (
    <Box mt={8} pt={5} className="public-seminar ">
      <Container maxWidth="lg">
        <SwiperCard title={t("public_seminar.title")} button={t("public_seminar.button")} href="/psychology/seminars" data={data} />
      </Container>
    </Box>
  );
};

export default PublicSeminar;
