//mui
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
//translate
import useTranslation from "next-translate/useTranslation";
//icon
import { TiTick } from "react-icons/ti";

const Articles = () => {
    const { t } = useTranslation("psychologychildren");

  return (  
    <Box className="article">
        <Box className="content">
        {/* first article */}
    <Box className="d-flex flex-between">
      <Box pr={2} pl={12.5}><Typography component="h2" variant="title" pb={4}>{t("articles.desc1H")}</Typography>
    <Typography variant="desc" >{t("articles.desc1")}
    <List>
        <ListItem >        
            <ListItemText><TiTick className="tick" /><Typography variant="desc">{t("articles.desc1listitem1")}</Typography> </ListItemText>
        </ListItem>
        <ListItem >        
            <ListItemText><TiTick className="tick" /><Typography variant="desc">{t("articles.desc1listitem2")}</Typography> </ListItemText>
        </ListItem>
        <ListItem >        
            <ListItemText><TiTick className="tick" /><Typography variant="desc">{t("articles.desc1listitem3")}</Typography> </ListItemText>
        </ListItem>
        <ListItem >        
            <ListItemText><TiTick className="tick" /><Typography variant="desc">{t("articles.desc1listitem4")}</Typography> </ListItemText>
        </ListItem>
    </List>
    </Typography>
    </Box>
    
    <Box component="img" src={`/img/psychologychildren/Rectangle 67.png`} className="desc-img" />  </Box>
    {/* first article */}
    {/* Consultants Swiper */}
    <Box mt={25} mb={17.125} className="consultants-bg d-flex justify-center">
CONSULTANT SWIPER
    </Box>
    {/* Consultants Swiper */}
     {/* second article */}
     <Box className="d-flex flex-between">
      <Box pr={2} pl={12.5}><Typography component="h2" variant="title" pb={4}>{t("articles.desc2H")}</Typography>
    <Typography variant="desc" >{t("articles.desc2")}
    
    </Typography>
    </Box>
    
    <Box component="img" src={`/img/psychologychildren/Group 928.png`} className="desc-img" />  </Box>
    {/* second article */}
     {/* third article */}
     <Box className="d-flex flex-between" mt={20.75}>      
    
    <Box component="img" src={`/img/psychologychildren/Group 930.png`} className="desc-img" /> 
    <Box pr={2} pl={12.5}><Typography component="h2" variant="title" pb={4}>{t("articles.desc3H")}</Typography>
    <Typography variant="desc" >{t("articles.desc3")}
    
    </Typography>
    </Box> </Box>
    {/* third article */}
    <Box mt={25} mb={25} className="consultants-bg d-flex justify-center">
COMMENTS SWIPER
    </Box>
    </Box></Box>
  )
}

export default Articles