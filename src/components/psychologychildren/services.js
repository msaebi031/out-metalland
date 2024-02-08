//mui
import { Typography, Box } from "@mui/material";
//next
import Link from "next/link";
//icon
import { IoBodyOutline } from "react-icons/io5";
import { RiRestaurant2Fill } from "react-icons/ri";
import { TbCloudRain, TbFriends } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import {
  MdNoFood,
  MdOutlinePsychology,
  MdFamilyRestroom,
} from "react-icons/md";
//translate
import useTranslation from "next-translate/useTranslation";

const Services = () => {
  const { t } = useTranslation("psychologychildren");

  const services = [
    { icon: <TbCloudRain />, text: "Depression" },
    { icon: <GiBrain />, text: "Anxiety" },
    { icon: <TbFriends />, text: "Peer relationship difficulties" },
    { icon: <MdNoFood />, text: "Unhealthy Eating" },
    { icon: <RiRestaurant2Fill />, text: "Eating Disorders" },
    { icon: <IoBodyOutline />, text: "Body Image" },
    { icon: <MdFamilyRestroom />, text: "Parent-child relationship issues" },
    {
      icon: <MdOutlinePsychology />,
      text: "Disruptive child behaviors, including ADHD",
    },
  ];

  return (
    <Box className="serviceH">
      <Box className="box">
        {/* heading */}
        <Typography
          component="h2"
          variant="title"
          className="d-flex justify-center align-center"
          mb={10}
        >
          {t("services.heading")}
        </Typography>
        {/* heading */}

        {/* list of services and their icons */}
        <Box className=" d-flex justify-around flex-wrap">
          {services.map((service, index) => (
            <Box key="index" className="container">
             <Link href={`/psychology/psychologychildren/psychologists/?specialty=${service.text}`}>
              <Box className="icon pointer d-flex justify-center align-center">
                {service.icon}
              </Box>
              <Typography
                variant="p"
                className="caption d-flex justify-center align-center color-black"
              >
                {service.text}
              </Typography></Link>
            </Box>
          ))}
        </Box>
        {/* list of services and their icons */}
      </Box>


    </Box>
  );
};

export default Services;
