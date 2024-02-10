// next js
import Link from "next/link";
// mui
import { Box, Typography, Avatar, Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// next-translate
import useTranslation from "next-translate/useTranslation";
// icon
import { TbBrandTwitterFilled } from "react-icons/tb";
import { BsWhatsapp, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation("global");

  const itemsSocial = [
    { href: "", icon: <BsWhatsapp /> },
    { href: "", icon: <BsLinkedin /> },
    { href: "", icon: <BsInstagram /> },
    { href: "", icon: <FaFacebookF /> },
    { href: "", icon: <TbBrandTwitterFilled /> },
  ];

  const itemsAccess = [
    { href: "", name: "Home" },
    { href: "", name: "Our Services" },
    { href: "", name: "About" },
    { href: "", name: "Contact Us" },
    { href: "", name: "Articlesink to" },
  ];

  const itemsLinks = [
    { href: "", name: "Link 1" },
    { href: "", name: "Link 2" },
    { href: "", name: "Link 3" },
    { href: "", name: "Link 4" },
    { href: "", name: "Link 5" },
  ];

  return (
    <Box component="footer" id="footer">
      <Container maxWidth="lg">
        <Grid container columnSpacing={{ xs: 0, sm: 1, md: 5, lg: 9 }}>
          <Grid item xs={12} sm={6} md={6} lg={3.5}>
            <Typography
              variant="h5"
              component="p"
              color="light.main"
              className="fh1 font-black"
              pb={2}
            >
              MentalLand
            </Typography>
            <Typography variant="p" className="ftext" fontSize="18px">
              {t("footer.dic")}
            </Typography>
            <Box
              className="d-flex w-100"
              pb={2}
              justifyContent={{ xs: "space-evenly", md: "space-between" }}
            >
              {itemsSocial.map((item, index) => (
                <Link key={index} href={item.href}>
                  <Avatar className="avatar-social" variant="rounded">
                    {item.icon}
                  </Avatar>
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3.5}>
            <Typography
              color="light.main"
              variant="h5"
              fontSize="22px"
              component="h6"
              className="fh2 font-bold"
            >
              {t("footer.write")}
            </Typography>
            <Box mt="16px">
              <Typography
                color="light.main"
                variant="body2"
                py={0.7}
                component="p"
              >
                {t("footer.name")}
              </Typography>
              <input type="full name" className="formn" autoComplete="off" />
              <Typography
                color="light.main"
                variant="body2"
                py={0.7}
                component="p"
              >
                {t("footer.email")}
              </Typography>
              <input type="full name" className="forme" autoComplete="off" />
              <Typography
                color="light.main"
                variant="body2"
                py={0.7}
                component="p"
              >
                {t("footer.message")}
              </Typography>
              <textarea type="full name" className="formm" autoComplete="off" />
            </Box>
            <Box className="text-center">
              <Button
                color="light"
                className="font-bold"
                sx={{ color: "primary.main" }}
                variant="contained"
              >
                {t("footer.send_message")}
              </Button>
            </Box>
          </Grid>

          <Grid mt={{ xs: 7, lg: "auto" }} item xs={12} sm={12} md={12} lg={5}>
            <Box className="d-flex justify-beetwen">
              <Box display="grid">
                <Typography
                  className="fh1 font-bold"
                  color="light.main"
                  variant="h6"
                  component="p"
                >
                  {t("footer.quick_access")}
                </Typography>
                {itemsAccess.map((item, index) => (
                  <Link key={index} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </Box>

              <Box display="grid">
                <Typography
                  className="fh1 font-bold"
                  variant="h6"
                  color="light.main"
                  fontSize="22px"
                  component="p"
                >
                  {t("footer.helpful_links")}
                </Typography>
                {itemsLinks.map((item, index) => (
                  <Link key={index} href={item.href} className="fqaccess fhome">
                    {item.name}
                  </Link>
                ))}
              </Box>
            </Box>
            <Typography
              color="light.main"
              pt="5.5rem"
              variant="body1"
              component="p"
            >
              {t("footer.copyright")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
