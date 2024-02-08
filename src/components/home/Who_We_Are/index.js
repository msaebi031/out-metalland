import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import useTranslation from "next-translate/useTranslation";

const Who_We_Are = () => {
  const { t } = useTranslation("home");

  const items = [
    {
      src: "/img/home/who-we-are/2019-desktop.png",
      srcm: "/img/home/who-we-are/2019-mobile.png",
      text: t("home.whoWeAre.items.text1"),
      width: "125px",
    },
    {
      src: "/img/home/who-we-are/2020-desktop.png",
      srcm: "/img/home/who-we-are/2020-mobile.png",
      text: t("home.whoWeAre.items.text2"),
      width: "172px",
    },
    {
      src: "/img/home/who-we-are/2021-desktop.png",
      srcm: "/img/home/who-we-are/2021-mobile.png",
      text: t("home.whoWeAre.items.text3"),
      width: "222px",
    },
    {
      src: "/img/home/who-we-are/2023-desktop.png",
      srcm: "/img/home/who-we-are/2023-mobile.png",
      text: t("home.whoWeAre.items.text4"),
      width: "251px",
    },
  ];

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box mt={15}>
      <Box className="text-center">
        <Typography component="h5" variant="h5" className="font-Alice">
          {t("home.whoWeAre.title")}{" "}
        </Typography>
        <Typography mt={1.8} lineHeight="1.86" variant="body1" fontSize="16.7px" component="h6" color="dark.main">
          {t("home.whoWeAre.dic")}
        </Typography>
      </Box>
      <Grid mt={4} container spacing={{ xs: 0, sm: 5, md: 0 }}>
        {items.map((item, index) => (
          <Grid mt={{ xs: 8, sm: 0 }} key={index} item xs={12} sm={6} md={3} lg={3}>
            <Box
              right={{ md: "45px", lg: "62px" }}
              width={{ xs: "45%", sm: "50%", md: "100%" }}
              className="d-flex p-relative"
              m={"auto"}
              component="img"
              src={fullScreen ? item.srcm : item.src}
            />
            <Typography
              pt={2}
              width={item.width}
              m="auto"
              className="font-Alice text-center"
              variant="body1"
              fontSize="18px"
              component="h6"
              color="dark.main"
            >
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box mt={4} className="d-flex justify-center">
        <Link href="#about-me">
          <Button color="primary" className="font-bold btn-home" sx={{ color: "grey.light" }} variant="contained">
            {t("home.Learnmore")}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default Who_We_Are;
