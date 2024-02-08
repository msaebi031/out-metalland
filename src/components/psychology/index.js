import Layout from "@/src/container/layout";
import { Box, Container } from "@mui/material";
import Header from "./header";
import Status from "./status";
import Servise from "./services";
import Psychologys from "./psychology";
import PublicSeminar from "./publicSeminar";
import ConPicDetails from "../global/content/ConPicDetails";
// local
import useTranslation from "next-translate/useTranslation";
import Upcoming from "./upcoming";
import Question from "./question";

const PsychologyComponent = () => {
  const { t } = useTranslation("psychology");
  return (
    <Layout>
      {/* Header */}
      <Box id="psychology">
        <Header />
        <Status />
        <Servise />
        <Psychologys />
        <ConPicDetails
          title={t("servise.public")}
          dic={t("public")}
          img="/img/psychology/public/seminar.png"
          pt={10}
          spacing={5}
          orderI={{ xs: 2, md: 1 }}
          orderT={{ xs: 1, md: 2 }}
        />
        <PublicSeminar />
        <ConPicDetails
          title={t("servise.specialized")}
          dic={t("specialized_seminar")}
          img="/img/psychology/specialized/seminar.png"
          pt={10}
          spacing={5}
        />
        <Upcoming />
        <Question />
      </Box>
      {/* Header */}
    </Layout>
  );
};

export default PsychologyComponent;
