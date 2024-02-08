import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useTranslation from "next-translate/useTranslation";

const Cards = () => {
  const { t } = useTranslation("home");

  const items = [
    { number: "+4000", text: t("home.header.cardsItem.Treated") },
    { number: "+250", text: t("home.header.cardsItem.GraduactedArt") },
    { number: "+100", text: t("home.header.cardsItem.Performed") },
    { number: "+1200", text: t("home.header.cardsItem.Opportunities") },
  ];

  return (
    <Grid container>
      {items.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <Card className="header-card">
            <CardContent>
              <Typography variant="h4" fontSize="2.34rem" className="font-bold" color="light.main" gutterBottom>
                {item.number}
              </Typography>
              <Typography color="light.light" fontSize=".92rem" variant="body1" component="p">
                {item.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default Cards;
