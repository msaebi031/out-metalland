import { TabContext, TabList } from "@mui/lab";
import { Box, Tab, Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import AboutMe from "./AboutMe";
import Comment from "./Comments";
import WeeklyPlan from "./WeeklyPlan";

const TabsComponents = () => {

  const { t } = useTranslation("consultantchildren");

  // itemTab
  const itemTab = [
    { value: "1", name: t("tabs.aboutme"), radius: "25px 0 0px 0px" },
    { value: "2", name: t("tabs.comments") },
    { value: "3", name: t("tabs.weeklyPlan"), radius: "0px 25px 0px 0px" },
  ];

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tab-text">
      <TabContext value={value}>
        <TabList
          variant="fullWidth"
          // scrollButtons="auto"
          // aria-label="scrollable auto tabs example"
          indicatorColor="none"
          // textColor="secondary"
          //   allowScrollButtonsMobile
          onChange={handleChange}
        >
          {itemTab.map((item, index) => (
            <Tab
              sx={{ borderRadius: item.radius }}
              className={`${
                item.value === value ? "tab-bgactive" : "tab-bg"
              } tab`}
              label={
                <Typography
                  key={index}
                  color={
                    item.value === value ? "light.light" : "primary-linear"
                  }
                  className="font-bold"
                  variant="body1"
                  component="p"
                >
                  {item.name}
                </Typography>
              }
              value={item.value}
            />
          ))}
        </TabList>
        <AboutMe />
        <Comment />
        <WeeklyPlan />
      </TabContext>
    </Box>
  );
};
export default TabsComponents;
