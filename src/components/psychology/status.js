// mui
import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// local
import useTranslation from "next-translate/useTranslation";

const Status = () => {
  const { t } = useTranslation("psychology");
  const data = [
    { key: "years", value: "+10" },
    { key: "patients", value: "+130" },
    { key: "psychologist", value: "+100" },
    { key: "clients", value: "98%" },
  ];
  return (
    <Container maxWidth="lg">
      <Box className="status-psycholgy" pt={15}>
        <Grid2 container spacing={2}>
          {data.map((item, index) => (
            <Grid2 key={index} xs={12} sm={6} md={3} className="status text-center">
              <Box component="img" src={`/img/psychology/status/${index + 1}.svg`} />
              <Box className="box-text" left={{ xs: "35%", sm: "30%", md: "25%" }}>
                <Typography component="p" variant="status">
                  {item.value}
                </Typography>
                <Typography component="p" variant="subtitle1" className="p">
                  {t(`status.${item.key}`)}
                </Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
};

export default Status;
