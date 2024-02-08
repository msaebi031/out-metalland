import { Box, Tab, Button, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import { itemCard, tabPanels } from "./utils";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

const Services_Pr = () => {
  const { t } = useTranslation("home");

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box mt={10} id="services-pr">
      <Typography mb={4} textAlign="center" component="h5" variant="h5" className="font-Alice">
        {t("home.services-pr.title")}
      </Typography>
      <TabContext value={value}>
        <TabList
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          indicatorColor="none"
          // textColor="secondary"
          allowScrollButtonsMobile
          onChange={handleChange}
        >
          {itemCard.map((item, index) => (
            <Tab
              key={index}
              sx={{ m: item.m }}
              className={`${item.value === value ? "card-tab-bgactive" : "card-tab-bg"} card-tab`}
              label={
                <Box color={item.value === value ? "light.light" : "primary-linear"} mt={4}>
                  <Typography variant="h4" component="div" fontSize="85px" className="font-bold">
                    {item.icon}
                  </Typography>
                  <Typography
                    mt="-6px"
                    className={item.value === value ? "font-bold" : "font-light"}
                    fontSize="27px"
                    variant="body1"
                    component="p"
                  >
                    {item.text}
                  </Typography>
                </Box>
              }
              value={item.value}
            />
          ))}
        </TabList>
        <Box mt={8}>
          {tabPanels.map((item, index) => (
            <TabPanel className="tabpanel" key={index} value={item.value}>
              <Box>
                <Grid spacing={{ xs: 0, md: 5 }} container>
                  <Grid item xs={12} md={7} lg={6}>
                    <Typography mb={5} lineHeight="1.86" variant="body1" fontSize="16.4px" component="h6" color="dark.main">
                      {item.text}
                    </Typography>
                    <Link href="#about-me">
                      <Button color="primary" className="font-bold btn-home" sx={{ color: "grey.light" }} variant="contained">
                        {t("home.Learnmore")}
                      </Button>
                    </Link>
                  </Grid>
                  <Grid display={{ xs: "none", md: "block" }} item xs={12} sm={4} md={5} lg={6}>
                    <Box borderRadius="25px" height="345px" className="w-100" component="img" src={item.src} />
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
          ))}
        </Box>
      </TabContext>
    </Box>
  );
};
export default Services_Pr;
