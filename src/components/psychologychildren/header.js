import { Box, Container, Typography } from '@mui/material';
import useTranslation from "next-translate/useTranslation";

const Header = () => {
    const { t } = useTranslation("psychologychildren");

  return (
      <Box className="header d-flex justify-center align-center">    
        
          <Typography variant="landingTitle">{t("header.landingTitle")}</Typography>
          <Container><Typography variant="landingP">{t("header.landingP")}
          </Typography>    </Container>  
      </Box>
  )
}

export default Header