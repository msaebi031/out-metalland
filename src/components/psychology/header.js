// mui
import { Box, Typography, TextField, Button, MenuItem, FormControl, Container } from "@mui/material";
// local
import useTranslation from "next-translate/useTranslation";
// react
import { useState } from "react";
// icon
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const { t } = useTranslation("psychology");

  const options = ["Option 1", "Option 2", "Option 3"];

  const [feild, setFeild] = useState("");
  const [psychologist, setPsychologist] = useState("");

  const handleChangeFeild = (event) => {
    setFeild(event.target.value);
  };

  const handleChangePsychologist = (event) => {
    setPsychologist(event.target.value);
  };

  return (
    <Box className="header">
      <Container maxWidth="lg">
        {/* Text */}
        <Box className="width-text d-flex align-center justify-center w-100" pt={30}>
          <Box className="box-text">
            <Typography
              component="h2"
              variant="title"
              color="warning.main"
              fontSize={{ xs: "40px", sm: "50px" }}
              lineHeight={{ xs: "60px !important", sm: "initial" }}
              className="title text-center"
            >
              {t("header.title")}
            </Typography>
            <Typography
              component="p"
              variant="p"
              color="white.light"
              fontSize={{ xs: "18px", sm: "initial" }}
              lineHeight={{ xs: "33px !important", sm: "initial" }}
              className="text-center"
            >
              {t("header.p")}
            </Typography>
          </Box>
        </Box>
        {/* Text */}

        {/* Search */}
        <FormControl fullWidth className="search-header" sx={{ display: { xs: "none", md: "block" } }}>
          <Box py={5} className="d-flex align-center justify-evenly float w-100">
            <TextField
              id="outlined-select-feild"
              select
              label={t("header.select_feild")}
              value={feild}
              onChange={handleChangeFeild}
              color="primary"
              sx={{ width: { md: "300px", lg: "380px" } }}
              SelectProps={{
                IconComponent: MdKeyboardArrowDown,
              }}
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={index}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-psychologist"
              select
              label={t("header.select_psychologist")}
              value={psychologist}
              onChange={handleChangePsychologist}
              SelectProps={{
                IconComponent: MdKeyboardArrowDown,
              }}
              color="primary"
              sx={{ width: { md: "300px", lg: "380px" } }}
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={index}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" size="large" className="border-rounded">
              {t("header.button")}
            </Button>
          </Box>
        </FormControl>
        {/* Search */}
      </Container>
    </Box>
  );
};

export default Header;
