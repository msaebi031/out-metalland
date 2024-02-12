import { Box, Container } from "@mui/material";
import Navbar from "./navbar";
import Topbar from "./topbar";

const Header = ({ float }) => {
  return (
    <Box component="header" className={float ? "float-header" : ""} mb={5}>
      <Container maxWidth="lg">
        <Topbar float={float} />
      </Container>
      <Navbar float={float} />
    </Box>
  );
};

export default Header;
