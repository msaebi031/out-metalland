// mui
import { Box, Container, Drawer, IconButton, Typography } from "@mui/material";
// next-translate
import useTranslation from "next-translate/useTranslation";
// next js
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// icon
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
// class names
import classNames from "classnames";
// utils
import { adress } from "./adress";
import ContentNavbar from "./content";

const Navbar = ({ float }) => {
  const { t, lang } = useTranslation("global");

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [pages, setPages] = useState([]);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const basepages = [
      { name: t("header.navbar.home"), href: "/" },
      {
        name: t("header.navbar.servise.title"),
        items: [
          {
            items: [
              { name: t("header.navbar.servise.items.psychology.Psychology"), href: "/psychology" },
              { name: t("header.navbar.servise.items.psychology.PsychologyAdults"), href: "/psychologyAdults" },
              { name: t("header.navbar.servise.items.psychology.PsychologyChildren"), href: "/psychologyChildren" },
              { name: t("header.navbar.servise.items.psychology.Seminars"), href: "/seminars" },
              { name: t("header.navbar.servise.items.psychology.PsychologistsAdults"), href: "/depressionadults" },
              { name: t("header.navbar.servise.items.psychology.PsychologistsChildren"), href: "/depressionchildren" },
            ],
          },
          {
            items: [
              { name: t("header.navbar.servise.items.art.Art"), href: "/art" },
              { name: t("header.navbar.servise.items.art.ArtAdults"), href: "/artadults" },
              { name: t("header.navbar.servise.items.art.MusicAdults"), href: "/musicadults" },
              { name: t("header.navbar.servise.items.art.CoachesAdults"), href: "/adultcoaches" },
              { name: t("header.navbar.servise.items.art.ArtChildren"), href: "/artchildren" },
              { name: t("header.navbar.servise.items.art.MusicChildren"), href: "/musicchildren" },
              { name: t("header.navbar.servise.items.art.CoachesChildren"), href: "/childrencoaches" },
            ],
          },
          {
            items: [
              { name: t("header.navbar.servise.items.business.Business"), href: "/business" },
              { name: t("header.navbar.servise.items.business.BusinessForAdults"), href: "/businessadults" },
              { name: t("header.navbar.servise.items.business.BusinessForChildren"), href: "/businesschildren" },
              { name: t("header.navbar.servise.items.business.JobOpportunities"), href: "/jobopportunities" },
            ],
          },
          { name: t("header.navbar.servise.items.Tourism"), href: "/tourism" },
        ],
      },
      {
        name: t("header.navbar.about.title"),
        items: [
          { name: t("header.navbar.about.items.about"), href: "/aboutus" },
          { name: t("header.navbar.about.items.positions"), href: "/positions" },
          { name: t("header.navbar.about.items.join"), href: "/joinus" },
        ],
      },
      { name: t("header.navbar.contact"), href: "/contact" },
    ];

    const currentPath = router.pathname.substring(1);
    const parts = currentPath.split("/");
    const lastPart = parts[parts.length - 1];
    if (/\[.*\]/.test(lastPart)) {
      const secondPart = parts[parts.length - 2];
      var currentPage = adress.find((page) => page.href === secondPart);
    } else {
      var currentPage = adress.find((page) => page.href === lastPart);
    }

    if (currentPage) {
      const updatedPages = basepages.map((page, index) => ({
        ...page,
        active: index === currentPage.index,
      }));
      setPages(updatedPages);
    }
  }, [router.pathname, lang]);

  return (
    <Fragment>
      <Box className={!float ? "float-color" : "bg-white"} py={4} mt={3}>
        <Container maxWidth="lg">
          <Box className="d-flex align-center justify-beetwen">
            {/* logo */}
            <Typography component="h1" variant="logo" color="primary">
              MentalLand
            </Typography>
            {/* logo */}

            {/* Navbar */}
            <Box className="navbar align-center" display={{ xs: "none", md: "flex" }}>
              {/* upper size */}
              {pages.map((item, index) => (
                <Box key={index} pr={3}>
                  {item.href ? (
                    <Link href={item.href} className={item.active ? "active" : ""}>
                      {item.name}
                    </Link>
                  ) : (
                    <Box key={index} className={classNames("active-hover p-relative", item.active ? "active" : "")}>
                      <Box className="d-flex align-center ">
                        <Typography component="p" pl={1}>
                          {item.name}
                        </Typography>
                        <MdKeyboardArrowDown />
                      </Box>

                      {/* hover */}
                      <Box component="ul" className="hover">
                        {item.items.map((value, ind) => (
                          <Fragment key={ind + 1 * 100}>
                            {!value.items ? (
                              <Box component="li" className={item.active ? "active" : ""}>
                                <Link href={value.href}>
                                  <Typography component="span" variant="subtitle2">
                                    {value.name}
                                  </Typography>
                                </Link>
                              </Box>
                            ) : (
                              <Box component="ul" className="list-loop">
                                {value.items.map((val, indexs) => (
                                  <Box component="li" key={indexs + 2 * 1000}>
                                    <Link href={val.href}>
                                      <Typography component="span" variant="subtitle2">
                                        {val.name}
                                      </Typography>
                                    </Link>
                                  </Box>
                                ))}
                              </Box>
                            )}
                          </Fragment>
                        ))}
                      </Box>

                      {/* hover */}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
            {/* upper size */}

            {/* icon open menu */}
            <Box display={{ xs: "block", md: "none" }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => handleOpen()}
                color="inherit"
                className="borderMenu z-index"
              >
                <CgMenuGridO />
              </IconButton>
            </Box>
            {/* icon open menu */}

            {/* Navbar */}
          </Box>
        </Container>
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => handleOpen()}
        PaperProps={{
          sx: {
            width: 280,
          },
        }}
        variant="temporary"
      >
        <ContentNavbar pages={pages} />
      </Drawer>
      {/* Drawer */}
    </Fragment>
  );
};

export default Navbar;
