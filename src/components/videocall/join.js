import { useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import Layout from "@/src/container/layout";
import { Box, Button, Container, Typography } from "@mui/material";
import Loading from "../global/loading";
import MettingView from "./view";
import { useSelector } from "react-redux";

const MeetingJoin = (props) => {
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
                Id Room : {props.meetingId}
              </Typography>

              <Typography component="p" variant="p" pb={2}>
                Moshaver : {data.name}
              </Typography>
              <Typography component="p" variant="p" pb={2}>
                time : {data.time}
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
