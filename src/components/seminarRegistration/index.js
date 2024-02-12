//mui
import Layout from "@/src/container/layout";
import { Container, Box, Typography, Button } from "@mui/material";
//icon
import { BiShoppingBag } from "react-icons/bi";
import Breadcrumb from "../global/breadcrumbs";

const SeminarRegistrationComponent = () => {
  // seminar information
  const seminar = [
    {
      title: "International Conference on Mental Health & Therapy",
      description: "Challenges in Mental Illness & development of integrated mental health",
      about:
        "Lorem ipsum dolor sit amet consectetur. Vitae commodo dignissim donec venenatis dolor ut vehicula. Euismod lobortis vulputate arcu massa. Facilisis dapibus tempor id auctor lobortis dictumst. Turpis id commodo eget pellentesque. Porta arcu id malesuada eu elit sodales ultrices. Tristique ipsum orci scelerisque proin nec posuere ornare pellentesque. Ullamcorper vulputate massa neque condimentum imperdiet viverra volutpat. Consectetur varius enim purus sed arcu egestas. Nisl velit pharetra gravida felis. Tincidunt dolor duis vestibulum scelerisque. Turpis diam nec in leo aliquam euismod et. At turpis.",
    },
  ];

  //guests information
  const guests = [
    {
      name: "Dr. Elizabeth Smith",
      intro:
        "Lorem ipsum dolor sit amet consectetur. Vitae commodo dignissim donec venenatis dolor ut vehicula. Euismod lobortis vulputate arcu massa. Facilisis dapibus tempor id auctor lobortis dictumst. Turpis id commodo eget pellentesque. Porta arcu id malesuada eu elit sodales ultrices. Tristique ipsum orci scelerisque proin nec posuere ornare pellentesque. Ullamcorper vulputate massa neque condimentum imperdiet viverra volutpat. Consectetur varius enim purus sed arcu egestas. Nisl velit pharetra gravida felis. Tincidunt dolor duis vestibulum scelerisque. Turpis diam nec in leo aliquam euismod et. At turpis.",
    },
    {
      name: "Dr. Tom Brown",
      intro:
        "Lorem ipsum dolor sit amet consectetur. Vitae commodo dignissim donec venenatis dolor ut vehicula. Euismod lobortis vulputate arcu massa. Facilisis dapibus tempor id auctor lobortis dictumst. Turpis id commodo eget pellentesque. Porta arcu id malesuada eu elit sodales ultrices. Tristique ipsum orci scelerisque proin nec posuere ornare pellentesque. Ullamcorper vulputate massa neque condimentum imperdiet viverra volutpat. Consectetur varius enim purus sed arcu egestas. Nisl velit pharetra gravida felis. Tincidunt dolor duis vestibulum scelerisque. Turpis diam nec in leo aliquam euismod et. At turpis.",
    },
  ];

  return (
    <Layout float={false}>
      <Container id="seminarreg">
        <Breadcrumb />

        {/* top box */}
        <Box
          component="section"
          className="regbar d-flex"
          bgcolor="primary.bg"
          mt={10}
          p={5}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            component="img"
            src={`/img/psychologyadults/group-933.png`}
            className="seminar-img"
            sx={{
              paddingRight: { xs: 0, md: 5 },
              paddingBottom: { xs: 5, md: 0 },
              width: { xs: 295 },
            }}
          />
          <Box>
            <Typography className="seminar_data" color="primary.main" mb={4}>
              {" "}
              {seminar[0].title}{" "}
            </Typography>
            <Box component="section" className="d-flex align-left justify-between">
              <Typography className="body-med">A</Typography>
              <Typography className="body-med">B</Typography>
            </Box>
            <Box>
              <Typography className="body-med"> {seminar[0].description} </Typography>
            </Box>
            {/* guests */}
            <Box component="section" className="d-flex align-center justify-between" mt={2}>
              {guests.map((guest, index) => (
                <Box key={index} className="d-flex align-center">
                  <Box component="img" src={`/img/psychologyadults/group-933.png`} className="guest-img" mr={1} />
                  <Typography className="body-med">{guest.name}</Typography>
                </Box>
              ))}
            </Box>
            {/* guests */}
            {/* seminar tags */}
            <Box component="section" className="d-flex align-center">
              {guests.map((guest, index) => (
                <Typography key={index} pr={2} pl={2} mr={2} mt={4} bgcolor="primary.tag" className="seminar-tag">
                  {guest.name}
                </Typography>
              ))}
            </Box>
            {/* seminar tags */}
          </Box>
        </Box>
        {/* top box */}
        {/* details box */}
        <Box component="section" className="regbar d-flex w-100" bgcolor="primary.bg" mb={10}>
          <Box p={5}>
            {/* guests detailed information */}
            <Box component="section">
              <Typography className="seminar_data" color="primary.main">
                {" "}
                GUEST INTRODUCTION:{" "}
              </Typography>
              {guests.map((guest, index) => (
                <Box key={index}>
                  <Box className="d-flex" mt={4}>
                    <Box component="img" src={`/img/psychologyadults/group-933.png`} className="guest-img" mr={1} />
                    <Typography className="body-med">{guest.name}</Typography>
                  </Box>
                  <Typography className="body-med" sx={{ fontSize: { xs: "14px", md: "20px" } }}>
                    {guest.intro}
                  </Typography>
                </Box>
              ))}
            </Box>
            {/* guests detailed information */}
            {/* seminar detailed description */}
            <Box mt={4}>
              <Typography className="seminar_data" color="primary.main">
                {" "}
                ABOUT SEMINAR:{" "}
              </Typography>
              <Typography className="seminar_data" mt={2} mb={2}>
                {seminar[0].title}
              </Typography>
              <Typography className="body-med">{seminar[0].about}</Typography>
            </Box>
            {/* seminar detailed description */}
          </Box>
        </Box>
        {/* details box */}
        <Button variant="contained" startIcon={<BiShoppingBag />} className="card-button pointer">
          Add to Card
        </Button>
      </Container>
    </Layout>
  );
};

export default SeminarRegistrationComponent;
