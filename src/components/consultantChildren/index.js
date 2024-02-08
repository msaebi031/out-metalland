import { Container, Divider, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AiFillStar } from "react-icons/ai";
import TabsComponents from "./Tabs";
import Select_Input from "./Select_Input";
import Breadcrumb from "../global/breadcrumbs";
import Layout from "@/src/container/layout";
import useTranslation from "next-translate/useTranslation";
import { Fragment, useState } from "react";
import ModalBuy from "./modal";
import { useSelector } from "react-redux";

const ConsultantChildrenComponents = () => {
  const { t } = useTranslation("consultantchildren");
  const [open, setOpen] = useState(false);
  // redux
  const { data } = useSelector((state) => state.doctor);

  const hanldeOpenModal = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Layout float={false}>
        <Box id="consultant-children">
          <Container maxWidth="lg">
            <Breadcrumb />
            <Grid className="card" container>
              <Grid className="p-relative grid-img" item m={{ xs: 0, sm: "auto", md: 0 }} xs={12} sm={7} md={3.5} lg={3.5}>
                <Box
                  height={{ xs: "260px", sm: "260px", md: "100%" }}
                  component="img"
                  src={process.env.URL_API + data.img || "/img/depression/no-photo.png"}
                  className="w-100"
                />
              </Grid>

              <Grid p={{ xs: "20px", sm: "25px" }} className="grid-text" item xs={12} sm={6} md={4} lg={4.9}>
                <Box display={{ xs: "block", sm: "flex" }} className="justify-between box-1">
                  <Box>
                    <Typography color="dark.main" variant="h5" component="h5" className="font-medium">
                      {data.name}
                    </Typography>
                    <Typography color="dark.main" variant="h6" component="p">
                      {data.dic}
                    </Typography>
                  </Box>
                </Box>

                <Box className="d-flex box-2" pt={2}>
                  {data?.categorys?.map((specialty, index) => (
                    <Typography key={(index + 1) * 10000} color="dark.main" variant="subtitle1" component="p" className="category" mr={1}>
                      {specialty}
                    </Typography>
                  ))}
                </Box>

                <Box className="d-flex align-center" pt={4}>
                  <AiFillStar className="star" />
                  <Typography pl={1} pr={5.3} color="dark.main" variant="subtitle1" component="p">
                    {data.star}
                  </Typography>
                  <Typography color="dark.main" variant="subtitle1" component="p">
                    {data.Consultations} {t("consultations")}
                  </Typography>
                </Box>
              </Grid>

              <Grid className="grid-divider" display={{ xs: "none", md: "block" }} py="20px" item xs={0.1}>
                <Divider orientation="vertical" variant="middle" flexItem />
              </Grid>

              <Grid p={{ xs: "20px", sm: "30px" }} className="grid-select" item xs={12} sm={5.9} md={4.4} lg={3.5}>
                <Select_Input hanldeOpenModal={() => hanldeOpenModal()} />
              </Grid>
            </Grid>
            <TabsComponents />
          </Container>
        </Box>
      </Layout>
      {/* modal show my subcriste */}
      <ModalBuy open={open} hanldeOpenModal={() => hanldeOpenModal()} />
      {/* modal show my subcriste */}
    </Fragment>
  );
};

export default ConsultantChildrenComponents;
