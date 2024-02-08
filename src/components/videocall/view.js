import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";
// icon
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { HiMiniVideoCamera, HiMiniVideoCameraSlash } from "react-icons/hi2";
import { PiPhoneSlashFill } from "react-icons/pi";
import { useRouter } from "next/router";

const MettingView = ({ participants }) => {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  const [mic, setMic] = useState(true);
  const [camera, setCamera] = useState(true);
  // router
  const router = useRouter();

  const handleMic = () => {
    setMic(!mic);
    toggleMic();
  };

  const handleCamera = () => {
    setCamera(!camera);
    toggleWebcam();
  };

  const handleLeave = () => {
    leave();
    router.push("/");
  };

  return (
    <Box className="bg" py={3}>
      <Container>
        <Grid container spacing={3}>
          {[...participants.keys()].map((participantId) => (
            <Grid key={participantId} item xs={12} md={6}>
              <ParticipantView participantId={participantId} />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Navbar */}
      <Box component="nav" className="navbarVideo" pt={3} pb={2}>
        <Container>
          <Box className="d-flex align-center justify-beetwen">
            <Typography component="h1" variant="logo" color="primary">
              MentalLand
            </Typography>
            <Box>
              {mic ? <FaMicrophone onClick={() => handleMic()} /> : <FaMicrophoneSlash onClick={() => handleMic()} />}
              {camera ? <HiMiniVideoCamera onClick={() => handleCamera()} /> : <HiMiniVideoCameraSlash onClick={() => handleCamera()} />}
              <PiPhoneSlashFill onClick={() => handleLeave()} />
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Navbar */}
    </Box>
  );
};

function ParticipantView(props) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal } = useParticipant(props.participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current.play().catch((error) => console.error("videoElem.current.play() failed", error));
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div>
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn ? (
        <ReactPlayer
          playsinline // extremely crucial prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          height={"100%"}
          width={"100%"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      ) : (
        <Box className="nocamare w-100">
          <Typography component="p" variant="logo">
            Metalland
          </Typography>
        </Box>
      )}
    </div>
  );
}

export default MettingView;
