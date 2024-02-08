import PicDetails from "../global/content/PicDetails";
import ConPicDetails from "../global/content/ConPicDetails";
import Articles from "./articles";
import Header from "./header";
import Services from "./services";
import { Container, Box } from "@mui/material";
import useTranslation from "next-translate/useTranslation";

const PsyChildrenComponent = () => {
  const { t } = useTranslation("psychologychildren");
  return (
    <Box id="psychologychildren">
      <Box pt={45}>
        <Container maxWidth="lg">
          <Header />
          <Services />
        </Container>
        <PicDetails
          title={t("articles.desc1H")}
          dic={t("articles.desc1")}
          img="/img/psychologychildren/Rectangle 67.png"
          pt={175}
          mdT={6}
          mdI={6}
          width={{ xs: "300px", md: "100%" }}
        />
        <ConPicDetails
          title={t("articles.desc2H")}
          dic={t("articles.desc2")}
          img="/img/psychologychildren/Group 928.png"
          pt={17.125}
          mdT={6}
          mdI={6}
          width={{ xs: "300px", md: "100%" }}
        />
        <PicDetails
          title={t("articles.desc3H")}
          dic={t("articles.desc3")}
          img="/img/psychologychildren/Group 930.png"
          pt={25}
          mdT={6}
          mdI={6}
          orderI={1}
          orderT={2}
          width={{ xs: "300px", md: "100%" }}
        />
        <Articles />
      </Box>
    </Box>
  );
};

export default PsyChildrenComponent;
