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
      category: "Depression",
    },
    { name: t("services.items.anxiety"), icon: <LuBrain />, width: "144px", category: "Anxiety" },
    {
      name: t("services.items.unhealthy"),
      icon: <MdOutlineNoFood />,
      width: "144px",
      category: "Unhealthy+eating",
    },
    {
      name: t("services.items.lifetransitions"),
      icon: <GiRelationshipBounds />,
      width: "205px",
      category: "Life+transitions%2CRelationship+difficulties",
    },
    {
      name: t("services.items.adjustment"),
      icon: <TiHeadphones />,
      width: "144px",
      category: "Adjustmenu+Issuces",
    },
  ];

  return (
    <Box mt={10} className="services">
      <Typography mb={4} textAlign="center" component="h5" variant="h5" className="font-Alice">
        {t("services.title")}
      </Typography>

      {/* list of services and their icons */}
      <Grid spacing={3} className="text-center justify-center" container>
        {items.map((item, index) => (
          <Grid key={index} item xs={6} lg={4}>
            <Link href={`/psychology/psychologyadults/depression?category=${item.category}`} className="box-icon">
              <Box>{item.icon}</Box>
              <Typography width={{ xs: "auto", sm: item.width }} component="h5" variant="h5" className="font-Alice">
                {item.name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
      {/* list of services and their icons */}
    </Box>
  );
};

export default Services;
