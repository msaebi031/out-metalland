import { Box, Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Grid from "@mui/material/Unstable_Grid2";
import { BsCloudDrizzle } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";
import { MdOutlineNoFood } from "react-icons/md";
import { GiRelationshipBounds } from "react-icons/gi";
import { TiHeadphones } from "react-icons/ti";
import Link from "next/link";

const Services = () => {
  const { t } = useTranslation("psychologyadults");

  const items = [
    {
      name: t("services.items.depression"),
      icon: <BsCloudDrizzle />,
      width: "144px",
    },
    { name: t("services.items.anxiety"), icon: <LuBrain />, width: "144px" },
    {
      name: t("services.items.unhealthy"),
      icon: <MdOutlineNoFood />,
      width: "144px",
    },
    {
      name: t("services.items.lifetransitions"),
      icon: <GiRelationshipBounds />,
      width: "205px",
    },
    {
      name: t("services.items.adjustment"),
      icon: <TiHeadphones />,
      width: "144px",
    },
  ];

  return (
    <Box mt={10} className="services">
      <Typography mb={4} textAlign="center" component="h5" variant="h5" className="font-Alice">
        {t("services.title")}
      </Typography>

      <Grid spacing={3} className="text-center" container columns={20}>
        {items.map((item, index) => (
          <Grid key={index} item sm={6} lg={4}>
            <Link href={`/psychology/psychologychildren/psychologists/?specialty`} className="box-icon">
              <Box>{item.icon}</Box>
              <Typography width={{ xs: "auto", sm: item.width }} component="h5" variant="h5" className="font-Alice">
                {item.name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
