import { Box } from "@mui/material";
import { useState } from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import MeetingJoin from "./join";

const ViceoCallComponents = ({ code }) => {
  const [meetingId, setMeetingId] = useState(code);

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return (
    <Box id="videocall">
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: true,
          name: "Metalland",
        }}
        token={process.env.AUTH_VIDEO}
      >
        <MeetingJoin meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
      </MeetingProvider>
    </Box>
  );
};

export default ViceoCallComponents;
