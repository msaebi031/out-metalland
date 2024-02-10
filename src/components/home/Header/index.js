import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Cards from "./Cards";
import Swiper_Header from "../../global/swipers/header";

const Header = () => {
  const { t } = useTranslation("home");

  const clas_bg = [{ name: "bg bgheader-1" }, { name: "bg bgheader-2" }, { name: "bg bgheader-3" }, { name: "bg bgheader-4" }];

  const slid = (
    <Container maxWidth="lg">
      <Grid mt={35} xs={10} sm={8} md={6} lg={5} container>
        <Typography lineHeight={{ xs: "1.25", sm: "1.5" }} color="dark.main" component="h1" variant="h4" className="font-Alice">
          <Typography component="span">{t("home.header.Mentalland")}</Typography>
          {t("home.header.title")}
        </Typography>
        <Typography
          lineHeight={{ xs: "1.4", sm: "1.6" }}
          color="dark.main"
          component="p"
          variant="h6"
          className=""
          my={{ xs: 2, sm: 1.5, md: 2.7 }}
        >
          {t("home.header.dic")}
        </Typography>
        <Link href="#about-me">
          <Button color="primary" className="font-bold btn-home" sx={{ color: "grey.light" }} variant="contained">
            {t("home.Learnmore")}
          </Button>
        </Link>
      </Grid>
    </Container>
  );

  return (
    <Box id="header">
      <Swiper_Header clas_bg={clas_bg} slid={slid} />
      <Cards />
    </Box>
  );
};
export default Header;
