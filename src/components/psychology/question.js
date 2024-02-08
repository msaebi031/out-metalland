// react
import { useState } from "react";
// mui
import { Box, Collapse, Container, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// icon
import { MdAdd, MdRemove } from "react-icons/md";
// local
import useTranslation from "next-translate/useTranslation";

const Question = () => {
  const { t } = useTranslation("psychology");

  const [showFullText, setShowFullText] = useState([true, false, false, false]);

  const handleToggleText = (index) => {
    const newShowFullText = [...showFullText];
    newShowFullText[index] = !newShowFullText[index];
    setShowFullText(newShowFullText);
  };

  const data = [
    {
      title: t("question.first_item.title"),
      content: t("question.first_item.dic"),
    },
    {
      title: t("question.secondary_item.title"),
      content: t("question.secondary_item.dic"),
    },
    {
      title: t("question.thery_item.title"),
      content: t("question.thery_item.dic"),
    },
    {
      title: t("question.foor_item.title"),
      content: t("question.foor_item.dic"),
    },
  ];

  return (
    <Box pt={7} className="question">
      <Container maxWidth="lg">
        <Typography component="h3" variant="title" className="text-center" pb={7}>
          {t("question.title")}
        </Typography>
        <Grid container spacing={5}>
          {/* Collspace */}
          <Grid xs={12} md={8}>
            {data.map((box, index) => (
              <Box key={index} className={!showFullText[index] ? "box" : "box-active"}>
                <Box className="d-flex align-center justify-beetwen">
                  <Typography variant="p" className={!showFullText[index] ? "" : "title-size"} component="p">
                    {box.title}
                  </Typography>
                  <IconButton aria-label="Toggle Text" onClick={() => handleToggleText(index)}>
                    {!showFullText[index] ? <MdAdd /> : <MdRemove />}
                  </IconButton>
                </Box>
                <Collapse in={showFullText[index]}>
                  <Typography variant="p" component="p" pt={3} color="dark.main">
                    {box.content}
                  </Typography>
                </Collapse>
              </Box>
            ))}
            {/* Collspace */}
          </Grid>
          {/* Img */}
          <Grid xs={0} md={4} display={{ xs: "none", md: "block" }}>
            <Box component="img" src={`/img/psychology/question/menu.png`} className="w-100" />
          </Grid>
          {/* Img */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Question;
