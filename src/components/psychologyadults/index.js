import { Container, Box } from "@mui/material";
import Header from "./header";
import Services from "./services";
import Layout from "@/src/container/layout";
import Psychologists from "./psychologists";
import ConPicDetails from "../global/content/ConPicDetails";
import useTranslation from "next-translate/useTranslation";
import PicDetails from "../global/content/PicDetails";
import Comments from "./comment";

const PsychologyAdultsComponent = () => {
  const { t } = useTranslation("psychologyadults");
  return (
    <Layout>
      <Box id="psychologyadults">
        <Header />
        <Container maxWidth="lg">
          <Services />
        </Container>

        <Psychologists />
        <ConPicDetails
          title={t("article.title")}
          dic={t("article.first")}
          img="/img/\psychologyadults/artic/first.png"
          pt={10}
          mdT={6}
          mdI={6}
        />
        <PicDetails
          title={t("article.title")}
          dic={t("article.secondary")}
          img="/img/\psychologyadults/artic/secondary.png"
          pt={13}
          mdT={7}
          mdI={5}
          orderI={{ xs: 2, md: 1 }}
          orderT={{ xs: 1, md: 2 }}
          width={{ xs: "350px", sm: "500px", md: "80%" }}
        />
        <Comments />
      </Box>
    </Layout>
  );
};

export default PsychologyAdultsComponent;
