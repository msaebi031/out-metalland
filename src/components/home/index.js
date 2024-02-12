import { Container } from "@mui/material";
import Header from "./header";
import Services_Pr from "./services_Pr";
import Who_We_Are from "./who_We_Are";
import Our_Mission from "./our_Mission";
import Mental_land from "./mental_land";
import Comments from "./comments";
import Latest_Articles from "./latest_Articles";
import Layout from "@/src/container/layout";
import Questions from "./questions";

const HomeComponent = () => {
  return (
    <Layout>
      <Header />
      <Container maxWidth="lg">
        <Services_Pr />
        <Who_We_Are />
        <Our_Mission />
      </Container>
      <Mental_land />
      <Container maxWidth="lg">
        <Comments />
      </Container>
      <Latest_Articles />
      <Questions />
    </Layout>
  );
};

export default HomeComponent;
