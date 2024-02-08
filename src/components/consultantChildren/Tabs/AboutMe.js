import { TabPanel } from "@mui/lab";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const AboutMe = () => {
  // redux
  const { data } = useSelector((state) => state.doctor);
  return (
    <TabPanel className="tabpanel" value="1">
      <Typography color="dark.main" variant="body1" component="p">
        {data.description}
      </Typography>
    </TabPanel>
  );
};

export default AboutMe;
