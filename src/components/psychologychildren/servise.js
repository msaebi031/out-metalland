//mui
import { Typography, Box, Container } from "@mui/material";
//next
import Link from "next/link";
//icon
import { IoBodyOutline } from "react-icons/io5";
import { RiRestaurant2Fill } from "react-icons/ri";
import { TbCloudRain, TbFriends } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { MdNoFood, MdOutlinePsychology, MdFamilyRestroom } from "react-icons/md";
//translate
import useTranslation from "next-translate/useTranslation";
import Grid from "@mui/material/Unstable_Grid2";

const Servise = () => {
  const { t } = useTranslation("psychologychildren");

  const services = [
    { title: t("services.items.Depression"), icon: <TbCloudRain />, category: "Depression" },
    { title: t("services.items.Anxiety"), icon: <GiBrain />, category: "Anxiety" },
    { title: t("services.items.Peer_relationship_difficulties"), icon: <TbFriends />, category: "Unhealthy+eating" },
    { title: t("services.items.Unhealthy_Eating"), icon: <MdNoFood />, category: "Unhealthy+eating" },
    { title: t("services.items.Eating_Disorders"), icon: <RiRestaurant2Fill />, category: "Unhealthy+eating" },
    { title: t("services.items.Body_Image"), icon: <IoBodyOutline />, category: "Unhealthy+eating" },
    { title: t("services.items.Parent_child_relationship_issues"), icon: <MdFamilyRestroom />, category: "Unhealthy+eating" },
    { title: t("services.items.Disruptive_child"), icon: <MdOutlinePsychology />, category: "Unhealthy+eating" },
  ];
  return (
    <Box>
      <Container>
        {/* heading */}
        <Typography component="h2" variant="title" className="text-center" mb={10} pt={7}>
          {t("services.heading")}
        </Typography>
        {/* heading */}

        {/* list of services and their icons */}
        <Grid container spacing={3} columns={{ xs: 12, md: 15 }} rowSpacing={{ xs: 3, sm: 1.5 }} className="justify-center">
          {services.map((service, index) => (
            <Grid key={index} xs={6} sm={4} md={3}>
              <Link
                href={`/psychology/psychologychildren/depression?category=${service.category}`}
                className="d-flex flex-column align-center link"
              >
                <Box className="icon pointer d-flex justify-center align-center">{service.icon}</Box>
                <Typography variant="p" className="text-center" color="dark.main">
                  {service.title}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        {/* list of services and their icons */}
      </Container>
    </Box>
  );
};

export default Servise;
