// mui
import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// local
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const Servise = () => {
  const { t } = useTranslation("psychology");

  const data = [
    { key: "aduls", href: "/psychology/psychologyadults" },
    { key: "children", href: "/psychology/psychologychildren" },
    { key: "public", href: "/psychology/seminars" },
    { key: "specialized", href: "/psychology/seminars" },
  ];

  return (
    <Box className="servise-psycholgy" pt={10}>
      {/* title */}
      <Typography component="h2" variant="title" color="warning.main" className="title text-center">
        {t("servise.title")}
        <br />
        <Typography component="span" variant="title" color="dark.main">
          {t("servise.dtitle")}
        </Typography>
      </Typography>
      {/* title */}

      {/* servises */}
      <Box>
        <Box
          component="img"
          src={`/img/psychology/servise/vector.png`}
          className="box w-100"
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Container maxWidth="lg">
          <Grid2 container spacing={2} pt={4}>
            {data.map((item, index) => (
              <Grid2 key={index} xs={12} sm={6} md={3} className="text-center bg-white ">
                <Link href={item.href}>
                  <Box component="img" src={`/img/psychology/servise/${item.key}.png`} width={{ xs: "230px", sm: "70%", md: "100%" }} />
                  <Typography component="p" variant="p" color="dark.main">
                    {t(`servise.${item.key}`)}
                  </Typography>
                </Link>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
      {/* servises */}
    </Box>
  );
};

export default Servise;
