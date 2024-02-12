import { Box, Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Grid from "@mui/material/Unstable_Grid2";

const Header = () => {
  const { t } = useTranslation("psychologyadults");

  return (
    <Box className="header">
      <Box pt={{ xs: 40, sm: 50 }}>
        <Grid pt={3.5} pb={5} container item md={6.3} sm={10} xs={11} className="text-center box-bg">
          <Typography
            fontSize={{ xs: "1.8rem", sm: "2.25rem" }}
            lineHeight={{ xs: "1.25", sm: ".8" }}
            color="danger.light"
            component="h1"
            variant="h4"
            className="font-Alice"
          >
            <Typography fontSize={{ xs: "1.8rem", sm: "2.25rem" }} component="span" className="font-Alice">
              {t("header.gethelp")}
            </Typography>
            {t("header.youdeserve")}
          </Typography>

          <Typography
            width={{ xs: "100%", sm: "466px" }}
            // fontSize={{ xs: "1.8rem", sm: "2.25rem" }}
            lineHeight={{ xs: "1.6", sm: "1.5" }}
            color="light.main"
            component="p"
            variant="h6"
            className="font-Gilroy"
          >
            {t("header.dic")}
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
