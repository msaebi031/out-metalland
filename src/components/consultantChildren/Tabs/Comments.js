import { TabPanel } from "@mui/lab";
import { Box, Avatar, Rating, Typography } from "@mui/material";
import { useState } from "react";

const Comment = () => {
  const [value, setValue] = useState(4);

  return (
    <TabPanel className="tabpane2" value="2">
      <Box className="card-comment">
        <Box className="d-flex justify-beetwen">
          <Box className="d-flex align-center justify-beetwen">
            <Avatar
              className="avatar-img"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <Box>
              <Typography
                pb={0.7}
                variant="body1"
                color="primary.main"
                component="p"
              >
                Sarah Smith
              </Typography>
              <Rating
                color="dark.main"
                name="simple-controlled"
                size="small"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </Box>
          <Typography variant="body1" color="primary.main" component="p">
            January21, 2023
          </Typography>
        </Box>
        <Typography
          lineHeight={2}
          mt={1}
          variant="body1"
          color="dark.main"
          component="p"
        >
          Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit
          consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing
          donec. Sed cras vulputate amet scelerisque. Varius etiam enim velit
          arcu arcu eget. Nunc a quis enim nibh posuere cras aenean purus. Nulla
          sagittis semper cum rhoncus varius quis vitae venenatis nibh. Senectus
          fames quisque porta vitae facilisis commodo consequat. Feugiat enim
          odio in sed condimentum. Id et purus est risus.
        </Typography>
      </Box>
    </TabPanel>
  );
};

export default Comment;
