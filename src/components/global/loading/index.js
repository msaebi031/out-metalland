import { CircularProgress } from "@mui/material";

const Loading = ({ color = "primary" }) => {
  return (
    <div className="center-screen">
      <div className="screen">
        <CircularProgress color={color} size={65} />
      </div>
    </div>
  );
};

export default Loading;
