import { Box, Container, Button, Typography } from "@mui/material";
import ImgText from "../global/swipers/imgText";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useSelector } from "react-redux";

/**Data Comment */
const Psychologists = () => {
  const { t } = useTranslation("psychologychildren");

  const { data } = useSelector((state) => state.consultant);
  const newArray = data.map((obj) => {
    return {
      ...obj, // بازنویسی تمام فیلدهای قبلی object
      img: process.env.URL_API + obj.img,
      href: "/psychology/psychologychildren/depression/" + obj.name.replace(/\s+/g, "-"),
    };
  });
  /**Data Comment */

  return (
    <Box py={5} mt={10} className="psychologists">
      <Container maxWidth="lg">
        <Box className=" text-center">
          <Typography component="h5" variant="h5" className="font-semibold" sx={{ maxWidth: { sm: "430px", md: "initial" } }}>
            {t("psychologists.title")}
          </Typography>
          <Typography pb={6} pt={1} color="dark.main" fontSize="1.14rem" component="p" variant="h6" lineHeight={1.7}>
            {t("psychologists.text")}
          </Typography>
        </Box>
        <ImgText data={newArray} />
        <Box mt={4} className="d-flex justify-center">
          <Link href="/psychology/psychologychildren/depression">
            <Button color="primary" className="font-bold btn-home" sx={{ color: "grey.light" }} variant="contained">
              {t("psychologists.btn")}
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Psychologists;
