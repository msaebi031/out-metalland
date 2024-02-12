import PsychologyAdultsComponent from "@/src/components/psychologyadults";
import { SaveAllConsultant } from "@/src/redux/consultant/action";
import { wrapper } from "@/src/redux/store/configureStore";
import axios from "axios";
import { connect } from "react-redux";

const PsychologyAdultsPage = () => {
  return <PsychologyAdultsComponent />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await axios
    .post("/api/consultant", {
      query: "getAll",
      limit: 10,
      offset: 0,
      type: false,
    })
    .then(async (res) => {
      await store.dispatch(SaveAllConsultant(res.data, true));
    })
    .catch((err) => console.log(err));
});

// you can also use Redux `useSelector` and other hooks instead of `connect()`
export default connect((state) => state)(PsychologyAdultsPage);
