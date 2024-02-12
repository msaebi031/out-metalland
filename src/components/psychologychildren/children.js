// mui
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// local
import useTranslation from "next-translate/useTranslation";
// icon
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

const Children = () => {
  const { t } = useTranslation("psychologychildren");

  const items = t("articles.items", {}, { returnObjects: true });
  return (
    <Box pt={10}>
      <Grid2 container>
        <Grid2 xs={12} md={7} order={1} pl={6} pr={6}>
          <Typography component="h2" variant="title" pb={3}>
            {t("articles.desc1H")}
          </Typography>
          <Typography component="p" variant="p" color="dark.main">
            {t("articles.desc1")}
          </Typography>
          {items?.map((item, index) => (
            <Box key={index} className="d-flex align-center">
              <DoneRoundedIcon color="success" />
              <Typography component="p" variant="p" color="dark.main" pl={1}>
                {item}
              </Typography>
            </Box>
          ))}
        </Grid2>
        <Grid2 xs={12} md={5} order={2} className="text-center">
          <Box
            component="img"
            src="/img/psychologychildren/artic/children.png"
            width={{ xs: "350px", sm: "500px", md: "100%" }}
            pt={{ xs: 5, md: 0 }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Children;
