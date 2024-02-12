import { Box, Typography, Container, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";

const Mental_land = () => {
  return (
    <Box padding={{ xs: "11px 0px 48px", md: "29px 0px 42px" }} id="mental_land" mt={15}>
      <Container maxWidth="lg">
        <Grid mt={4} container spacing={{ xs: 0 }}>
          <Grid item display={{ xs: "none", md: "block" }} md={5}>
            <Box mt="13px" width={{ md: "75%" }} component="img" src="/img/home/mental_land/img-mobile.png" />
          </Grid>
          <Grid item xs={12} lg={7}>
            <Typography component="h5" variant="title">
              MENTALLAND ON YOUR PHONE
            </Typography>
            <Typography mt={1.8} variant="p" component="p" color="dark.main">
              Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus
              erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat
              nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet.
            </Typography>
            <Box component="ul" px={2} className="list-style-disc">
              <Typography component="li" pb={2}>
                Lorem ipsum dolor sit amet consectetur. Pretium rutrum
              </Typography>
              <Typography component="li" pb={2}>
                Lorem ipsum dolor sit amet consectetur. Pretium rutrum
              </Typography>
              <Typography component="li" pb={2}>
                Lorem ipsum dolor sit amet consectetur. Pretium rutrum
              </Typography>
              <Typography component="li">Lorem ipsum dolor sit amet consectetur. Pretium rutrum</Typography>
            </Box>
            <Box mt={4.2}>
              <Link href="#about-me">
                <Button color="primary" className="font-bold btn-home" sx={{ color: "grey.light" }} variant="contained">
                  Learn more
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mental_land;
