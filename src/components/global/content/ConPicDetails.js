// mui
import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// next js
import Link from "next/link";

const ConPicDetails = ({
  img,
  title,
  dic,
  align = "initial",
  pt = 0,
  spacing = 0,
  mdT = 8,
  mdI = 4,
  orderT = 1,
  orderI = 2,
  menu = [],
  width = { xs: "350px", sm: "500px", md: "100%" },
}) => {
  return (
    <Box pt={pt}>
      <Container maxWidth="lg">
        <Grid2 container spacing={spacing}>
          <Grid2 xs={12} md={mdT} order={orderT} textAlign={align}>
            <Typography component="h2" variant="title" pb={3}>
              {title}
            </Typography>
            <Typography component="p" variant="p" color="dark.main" pb={4}>
              {dic}
            </Typography>
            {menu.map((item, index) => (
              <Link key={index} href={item.href}>
                <Button variant="contained" size="large" className="border-rounded button-rounded" sx={{ mr: 3 }}>
                  {item.text}
                </Button>
              </Link>
            ))}
          </Grid2>
          <Grid2 xs={12} md={mdI} order={orderI} className="text-center">
            <Box component="img" src={img} width={width} />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default ConPicDetails;
