import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useTranslation from "next-translate/useTranslation";

const Our_Mission = () => {
  const { t } = useTranslation("home");

  const items = [
    { title: t("home.ourMission.items.vision"), text: t("home.ourMission.items.dic"), bgImg: "bg-vision" },
    { title: t("home.ourMission.items.mission"), text: t("home.ourMission.items.dic"), bgImg: "bg-mission" },
    { title: t("home.ourMission.items.value"), text: t("home.ourMission.items.dic"), bgImg: "bg-value" },
    { title: t("home.ourMission.items.goal"), text: t("home.ourMission.items.dic"), bgImg: "bg-goal" },
  ];

  return (
    <Box id="our-mission" mt={15}>
      <Typography component="h5" variant="h5" className="font-Alice">
        {t("home.ourMission.title")}
      </Typography>
      <Typography mt={1.8} lineHeight="1.86" variant="body1" fontSize="16.4px" component="h6" color="dark.main">
        {t("home.ourMission.dic")}
      </Typography>

      <Grid mt={4} container spacing={{ xs: 0, sm: 5, md: 0, lg: 1 }}>
        {items.map((item, index) => (
          <Grid mt={{ xs: 4, md: 2, lg: 0 }} key={index} item xs={12} sm={6} md={4} lg={3}>
            <Box m="auto" pb="72px" pt={12.3} className={`${item.bgImg} bgimg-card`}>
              <Box>
                <Typography
                  pt={2}
                  className="font-semiBold text-center"
                  variant="body1"
                  fontSize="20px"
                  component="h6"
                  color="primary.light"
                >
                  {item.title}
                </Typography>
                <Typography
                  pt={0.8}
                  width="206px"
                  m="auto"
                  className="font-Alice text-center"
                  variant="body2"
                  component="h6"
                  color="dark.main"
                >
                  {item.text}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Our_Mission;
