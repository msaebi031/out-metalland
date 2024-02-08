import Layout from "@/src/container/layout";
import Breadcrumb from "../global/breadcrumbs";
import { Box, Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import SwiperCard from "../global/swipers/card";

const SeminarsComponent = () => {
  const { t } = useTranslation("seminars");

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
    <Layout float={false}>
      <Container maxWidth="lg">
        <Breadcrumb />
        <Box pt={3}>
          <SwiperCard title={t("SpecializedSeminars")} data={data} pt={5} />
          <SwiperCard title={t("SpecializedEvents")} data={data} pt={7} />
          <SwiperCard title={t("GeneralSeminars")} data={data} pt={7} />
          <SwiperCard title={t("GeneralEvents")} data={data} pt={7} />
        </Box>
      </Container>
    </Layout>
  );
};

export default SeminarsComponent;
