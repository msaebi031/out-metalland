import Layout from "@/src/container/layout";
import Breadcrumb from "../global/breadcrumbs";
//translate
import useTranslation from "next-translate/useTranslation";
// mui
import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Filters from "./filters";
import Content from "./contents";

const DepressionComponent = () => {
  const { t } = useTranslation("depression");
  return (
    <Layout float={false}>
      <Container maxWidth="lg">
        <Breadcrumb />
        <Typography component="h2" variant="title" pt={6} pb={3}>
          {t("depression")}
        </Typography>
        <Typography component="p" variant="p" color="dark.main">
          {t("general")}
        </Typography>
        <Box id="depression" pt={8}>
          {/* three items in a line */}
          <Grid2 container spacing={2.5}>
            <Grid2 xs={12} md={3.5}>
              <Filters />
            </Grid2>
            <Grid2 xs={12} md={8.5}>
              <Content />
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Layout>
  );
};

export default DepressionComponent;
