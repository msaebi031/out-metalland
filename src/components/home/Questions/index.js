// react
import { useState } from "react";
// mui
import { Box, Collapse, Container, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// icon
import { MdAdd, MdRemove } from "react-icons/md";
// local
import useTranslation from "next-translate/useTranslation";

const Questions = () => {
  const { t } = useTranslation("home");

  const [showFullText, setShowFullText] = useState([true, false, false, false, false]);

  const handleToggleText = (index) => {
    const newShowFullText = [...showFullText];
    newShowFullText[index] = !newShowFullText[index];
    setShowFullText(newShowFullText);
  };

  const data = [
    {
      title: t("home.questions.items.title1"),
      content: t("home.questions.items.content1"),
    },
    {
      title: t("home.questions.items.title2"),
      content: t("home.questions.items.content2"),
    },
    {
      title: t("home.questions.items.title3"),
      content: t("home.questions.items.content3"),
    },
    {
      title: t("home.questions.items.title4"),
      content: t("home.questions.items.content4"),
    },
    {
      title: t("home.questions.items.title5"),
      content: t("home.questions.items.content5"),
    },
  ];

  return (
    <Box pt={7} mb="-7rem" className="question">
      <Container maxWidth="lg">
        <Typography className="font-SemiBold" component="h3" variant="title" pb={4.8}>
          {t("home.questions.title")}
        </Typography>
        <Grid container spacing={3}>
          {/* Collspace */}
          <Grid xs={12} md={10}>
            {data.map((box, index) => (
              <Box key={index} className={!showFullText[index] ? "box" : "box-active"}>
                <Box className="d-flex align-center justify-beetwen">
                  <Typography variant="p" className={!showFullText[index] ? "" : "title-size font-SemiBold"} component="p">
                    {box.title}
                  </Typography>
                  <IconButton aria-label="Toggle Text" onClick={() => handleToggleText(index)}>
                    {!showFullText[index] ? <MdAdd /> : <MdRemove />}
                  </IconButton>
                </Box>
                <Collapse in={showFullText[index]}>
                  <Typography variant="p" component="p" pt={1} color="dark.main">
                    {box.content}
                  </Typography>
                </Collapse>
              </Box>
            ))}
            {/* Collspace */}
          </Grid>
          {/* Img */}
          <Grid xs={0} md={2} display={{ xs: "none", md: "block" }}>
            <Box height={showFullText === true ? "auto" : "82%"} component="img" src={`/img/home/questions.png`} className="w-100" />
          </Grid>
          {/* Img */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Questions;
