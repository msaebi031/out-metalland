import { useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import Layout from "@/src/container/layout";
import { Box, Button, Container, Typography } from "@mui/material";
import Loading from "../global/loading";
import MettingView from "./view";
import { useSelector } from "react-redux";
// translate
import useTranslation from "next-translate/useTranslation";

const MeetingJoin = (props) => {
  const { t } = useTranslation("videocall");
  const [joined, setJoined] = useState(null);
  const [loading, setLoading] = useState(false);
  // redux
  const { data } = useSelector((state) => state.videocall);

  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    //callback for when meeting is left
    onMeetingLeft: () => {
      props.onMeetingLeave();
    },
  });
  const joinMeeting = () => {
    setLoading(true);
    join();
  };

  return (
    <Box>
      {joined && joined == "JOINED" ? (
        <MettingView participants={participants} />
      ) : (
        <Layout float={false}>
          {/* Loading */}
          {loading ? <Loading /> : ""}
          {/* join the room */}
          <Container maxWidth="lg">
            <Box className="join text-center w-100">
              <Typography component="h1" variant="h5" pb={2}>
                {t("id")}
                <Typography component="span" variant="p" color="dark.light">
                  {props.meetingId}
                </Typography>
              </Typography>
              <Typography component="p" variant="h5" pb={2}>
                {t("presenter")}
                <Typography component="span" variant="p" color="dark.light">
                  {data.name}
                </Typography>
              </Typography>

              <Typography component="p" variant="h5" pb={2}>
                {t("time")}
                <Typography component="span" variant="p" color="dark.light">
                  {data.time}
                </Typography>
              </Typography>

              <Typography component="p" variant="h5" pb={2}>
                {t("times")}
                <Typography component="span" variant="p" color="dark.light">
                  {data.times}
                </Typography>
              </Typography>

              <Button variant="contained" onClick={joinMeeting}>
                Join Room
              </Button>
            </Box>
          </Container>
          {/* join the room */}
        </Layout>
      )}
    </Box>
  );
};

export default MeetingJoin;
