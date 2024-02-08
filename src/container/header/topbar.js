// mui
import { Box, MenuItem, Menu, Typography, Button, IconButton, Link, TextField, InputAdornment } from "@mui/material";
// translate
import useTranslation from "next-translate/useTranslation";
// icon
import { TbLogin2, TbBrandTwitterFilled } from "react-icons/tb";
import { BsHandbag, BsWhatsapp, BsLinkedin, BsInstagram, BsSearch } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { ArrowDropDownRounded } from "@mui/icons-material";
// react
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
// utils
import { adress } from "./adress";

const Topbar = ({ float }) => {
  const { t, lang } = useTranslation("global");

  const [color, setColor] = useState({ color: "primary", hover: "primary" });
  const [anchorEl, setAnchorEl] = useState(null);
  const opens = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // router
  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
    handleClose();
  };

  // flag
  const flags = [
    { name: "English", local: "en" },
    { name: "فارسی", local: "fa", font: "font-Iransans" },
  ];

  // socail media
  const shocailmedia = [
    { icon: <BsWhatsapp />, link: "#" },
    { icon: <BsLinkedin />, link: "#" },
    { icon: <BsInstagram />, link: "#" },
    { icon: <TiSocialFacebook />, link: "#" },
    { icon: <TbBrandTwitterFilled />, link: "#" },
  ];

  // color
  useEffect(() => {
    const currentPath = router.pathname.substring(1);
    const parts = currentPath.split("/");
    const lastPart = parts[parts.length - 1];
    if (/\[.*\]/.test(lastPart)) {
      const secondPart = parts[parts.length - 2];
      var currentPage = adress.find((page) => page.href === secondPart);
    } else {
      var currentPage = adress.find((page) => page.href === lastPart);
    }
    setColor(currentPage);
  }, [router.pathname]);

  return (
    <Fragment>
      <Box className="d-flex align-center justify-beetwen" mt={3}>
        {/* buttuns && flag */}
        <Box className="d-flex align-center" justifyContent={{ xs: "space-between", md: "center" }} width={{ xs: "100%", md: "initial" }}>
          <Box>
            <Button
              variant="contained"
              startIcon={<TbLogin2 />}
              className="border-rounded"
              color={color.color}
              sx={{
                mr: 2,
                "&:hover": {
                  backgroundColor: `${color.hover}.main`,
                },
              }}
            >
              {t("header.login")}
            </Button>
            <Button
              variant="contained"
              startIcon={<BsHandbag />}
              className="border-rounded"
              color={color.color}
              sx={{
                "&:hover": {
                  backgroundColor: `${color.hover}.main`,
                },
              }}
            >
              {t("header.cart")}
            </Button>
          </Box>

          <Box
            className="d-flex align-center pointer"
            pl={4}
            aria-controls={opens ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={opens ? "true" : undefined}
            onClick={handleClick}
          >
            <Box component="img" src={`/img/flag/${lang}.png`} className="witdh-flag" />
            <Typography component="p" variant="subtitle1" pl={1} color={float ? "white.main" : "dark.main"}>
              {lang}
            </Typography>
            <ArrowDropDownRounded color={float ? "white" : "dark"} fontSize="medium" />
          </Box>
        </Box>
        {/* buttuns && flag */}

        {/* Search */}
        <TextField
          sx={{ display: { xs: "none", md: "block" } }}
          variant="outlined"
          size="small"
          placeholder={t("header.search")}
          className="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton sx={{ p: 0 }}>
                  <BsSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* Search */}

        {/* socail media */}
        <Box className="align-center" display={{ xs: "none", md: "flex" }}>
          {shocailmedia.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              mr={2}
              className="shocail d-flex align-center justify-center"
              bgcolor="primary.main"
              sx={{
                "&:hover": {
                  backgroundColor: `${color.hover}.main`,
                },
              }}
            >
              <IconButton>{item.icon}</IconButton>
            </Link>
          ))}
        </Box>
        {/* socail media */}
      </Box>
      {/* flag */}
      <Menu anchorEl={anchorEl} open={opens} onClose={handleClose}>
        {flags.map((item, index) => (
          <MenuItem key={index} onClick={() => changeLanguage(item.local)}>
            <Box className="d-flex align-center">
              <Box component="img" src={`/img/flag/${item.local}.png`} alt="flag" className="witdh-flag" pr={1} />
              <Typography className={item.font}>{item.name}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
      {/* flag */}
    </Fragment>
  );
};

export default Topbar;
