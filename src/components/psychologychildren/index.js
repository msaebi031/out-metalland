import Layout from "@/src/container/layout";
import { Box } from "@mui/material";
import Header from "./header";
// local
import useTranslation from "next-translate/useTranslation";
import Servise from "./servise";
import Children from "./children";
import PicDetails from "../global/content/PicDetails";
import ConPicDetails from "../global/content/ConPicDetails";
import Psychologists from "./psychologists";
import Comments from "./comment";

const PsychologyComponent = () => {
  const { t } = useTranslation("psychologychildren");

  return (
    <Layout>
      {/* Header */}
      <Box id="psychology-children">
        <Header />
        <Servise />
        <Children />
        <Psychologists />
        <ConPicDetails
          title={t("articles.desc2H")}
          dic={t("articles.desc2")}
          img="/img/psychologychildren/artic/game.png"
          pt={10}
          mdT={6}
          mdI={6}
        />
        <PicDetails
          title={t("articles.desc3H")}
          dic={t("articles.desc3")}
          img="/img/psychologychildren/artic/article.png"
          pt={10}
          mdT={6}
          mdI={6}
          orderI={{ xs: 2, md: 1 }}
          orderT={{ xs: 1, md: 2 }}
        />
        <Comments />
      </Box>
      {/* Header */}
    </Layout>
  );
};

export default PsychologyComponent;
