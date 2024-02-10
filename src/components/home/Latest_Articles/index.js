import {
  Box,
  Card,
  Button,
  Container,
  Divider,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Latest_Articles = () => {
  const items = [
    {
      src: "/img/home/latest-articles/img-1.png",
      title: "Lorem ipsum dolor sit amet consectetur. Magna.",
      text: "Lorem ipsum dolor sit amet consectetur. Etiam aliquet tristique turpis ultrices ac augue eu adipiscing turpis. Ultricies rhoncus semper in id nec faucibus non vulputate vestibulum. Pharetra a elementum in.",
    },
    {
      src: "/img/home/latest-articles/img-2.png",
      title: "Lorem ipsum dolor sit amet consectetur. Magna.",
      text: "Lorem ipsum dolor sit amet consectetur. Etiam aliquet tristique turpis ultrices ac augue eu adipiscing turpis. Ultricies rhoncus semper in id nec faucibus non vulputate vestibulum. Pharetra a elementum in.",
    },
    {
      src: "/img/home/latest-articles/img-3.png",
      title: "Lorem ipsum dolor sit amet consectetur. Magna.",
      text: "Lorem ipsum dolor sit amet consectetur. Etiam aliquet tristique turpis ultrices ac augue eu adipiscing turpis. Ultricies rhoncus semper in id nec faucibus non vulputate vestibulum. Pharetra a elementum in.",
    },
  ];

  return (
    <Box mt={15} id="latest-articles">
      <Container maxWidth="lg">
        <Typography
          mb={1}
          className="font-semibold text-center"
          component="h5"
          variant="h5"
        >
          LATEST ARTICLES
        </Typography>
        <Grid item xs={12} container>
          {items.map((item, index) => (
            <Card
              sx={{ display: { xs: "block", md: "flex" } }}
              key={index}
              className="card w-100 align-center"
            >
              <CardMedia
                sx={{ display: { xs: "none", lg: "block" } }}
                component="img"
                image={item.src}
                alt="Live from space album cover"
              />
              <CardContent>
                <Typography
                  className="font-semibold "
                  component="div"
                  variant="h6"
                >
                  {item.title}
                </Typography>
                <Typography
                  mt={1}
                  variant="subtitle1"
                  color="dark.main"
                  component="div"
                >
                  {item.text}
                </Typography>
              </CardContent>
              <Divider
                sx={{ display: { xs: "none", md: "block" } }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <CardContent>
                <Box margin={{ xs: "0px", md: "0px 21px 0px 21px" }}>
                  <Button
                    sx={{ color: "primary.main" }}
                    className="font-bold"
                    variant="outlined"
                  >
                    Read
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Box className="d-flex justify-center" mt={7}>
          <Button
            color="primary"
            className="font-bold btn-home"
            sx={{ color: "grey.light" }}
            variant="contained"
          >
            See all
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default Latest_Articles;
