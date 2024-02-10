import { Container } from "@mui/material";
import Header from "./Header";
import Services_Pr from "./Services_Pr";
import Who_We_Are from "./Who_We_Are";
import Our_Mission from "./Our_Mission";
import Mental_land from "./Mental_land";
import Comments from "./Comments";
import Latest_Articles from "./Latest_Articles";
import Layout from "@/src/container/layout";
import Questions from "./Questions";

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
