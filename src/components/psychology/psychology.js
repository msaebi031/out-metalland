// mui
import { Box, Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// local
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const Psychologys = () => {
  const { t } = useTranslation("psychology");
  return (
    <Box pt={15}>
      <Grid2 container>
        {/* Adults */}
        <Grid2 xs={12} md={6} order={{ xs: 1, md: 2 }} px={4}>
          <Typography component="h2" variant="title" pb={3}>
            {t("servise.aduls")}
          </Typography>
          <Typography component="p" variant="p" color="dark.main" pb={4}>
            {t("psychology.aduls")}
          </Typography>
          <Link href={"psychology/psychologyadults"} className="color-white">
            <Button variant="contained" size="large" className="border-rounded">
              {t("psychology.button")}
            </Button>
          </Link>
        </Grid2>
        <Grid2 xs={12} md={6} order={{ xs: 2, md: 1 }} className="text-center" pt={{ xs: 4, md: 0 }}>
          <Box component="img" src={`/img/psychology/psychology/adults.png`} width={{ xs: "400px", md: "100%" }} height={{ md: "500px" }} />
        </Grid2>
        {/* Adults */}

        {/* Children */}
        <Grid2 xs={12} md={6} order={{ xs: 3, md: 3 }} pl={6} pr={6}>
          <Typography component="h2" variant="title" py={3}>
            {t("servise.children")}
          </Typography>
          <Typography component="p" variant="p" color="dark.main" pb={6}>
            {t("psychology.children")}
          </Typography>
          <Link href={"psychology/psychologychildren"} className="color-white">
            <Button variant="contained" size="large" className="border-rounded">
              {t("psychology.button")}
            </Button>
          </Link>
        </Grid2>
        <Grid2 xs={12} md={6} order={{ xs: 4, md: 4 }} className="text-center" pt={{ xs: 4, md: 0 }}>
          <Box
            component="img"
            src={`/img/psychology/psychology/children.png`}
            width={{ xs: "400px", md: "100%" }}
            height={{ md: "500px" }}
          />
        </Grid2>
        {/* Children */}
      </Grid2>
    </Box>
  );
};

export default Psychologys;
