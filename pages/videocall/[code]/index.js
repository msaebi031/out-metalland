import dynamic from "next/dynamic";
import { wrapper } from "@/src/redux/store/configureStore";
import axios from "axios";
import { connect } from "react-redux";
import { SetVideocall } from "@/src/redux/videocall/action";

const ViceoCallComponents = dynamic(() => import("@/src/components/videocall"), {
  ssr: false,
});

const VideoCallPage = ({ code }) => {
  return <ViceoCallComponents code={code} />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { params } = context;
  const { code } = params;
  await axios
    .post("/api/videocall", {
      query: "get",
      code,
    })
    .then(async (res) => {
      await store.dispatch(SetVideocall(res.data));
    })
    .catch((err) => console.log(err));
  return {
    props: {
      code,
    },
  };
});

export default connect((state) => state)(VideoCallPage);
