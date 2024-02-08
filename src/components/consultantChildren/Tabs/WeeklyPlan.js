import { TabPanel } from "@mui/lab";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WeeklyPlan = () => {
  const { t } = useTranslation("consultantchildren");
  const [itemTime, setItemTime] = useState([]);

  // redux
  const { data } = useSelector((state) => state.doctor);

  useEffect(() => {
    const datas = [];
    data?.time?.map((item) => {
      datas.push({ day: item.day, time: `${item.time[0]} - ${item.time[item.time.length - 1]}` });
    });
    setItemTime(datas);
  }, []);

  const daysOfWeek = t("week", {}, { returnObjects: true });

  return (
    <TabPanel className="tabpane3" value="3">
      <Grid container spacing={3}>
        {daysOfWeek.map((item, index) => {
          const find = itemTime.find((e) => e.day.toLowerCase() === item.toLowerCase());
          return (
            <Grid key={index} item xs={12} sm={6}>
              <Box
                border={!find ? "0.2px solid rgba(237, 161, 47, 1)" : "0.2px solid rgba(2, 151, 157, 1)"}
                className="d-flex justify-beetwen align-center box-card-l"
              >
                <Typography variant="body1" color="dark.main" component="p">
                  {item}
                </Typography>
                <Typography variant="body1" color="dark.main" component="p">
                  {find ? find.time : t("off")}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </TabPanel>
  );
};

export default WeeklyPlan;
