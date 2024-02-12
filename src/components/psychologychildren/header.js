// mui
import { Box, Typography, Container } from "@mui/material";
// local
import useTranslation from "next-translate/useTranslation";

const Header = () => {
  const { t } = useTranslation("psychologychildren");

  return (
    <Box className="header">
      <Container maxWidth="lg">
        {/* Text */}
        <Box className="width-text d-flex align-center justify-center w-100" pt={28}>
          <Box className="box-text">
            <Typography
              component="h2"
              variant="title"
              color="dark.main"
              fontSize={{ xs: "40px", sm: "50px" }}
              lineHeight={{ xs: "60px !important", sm: "initial" }}
              className="title text-center"
            >
              {t("header.landingTitle")}
            </Typography>
            <Typography
              component="p"
              variant="p"
              color="dark.light"
              fontSize={{ xs: "18px", sm: "initial" }}
              lineHeight={{ xs: "33px !important", sm: "initial" }}
              className="text-center"
              pt={3}
            >
              {t("header.landingP")}
            </Typography>
          </Box>
        </Box>
        {/* Text */}
      </Container>
    </Box>
  );
};

export default Header;
