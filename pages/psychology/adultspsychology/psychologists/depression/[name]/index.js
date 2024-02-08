import { wrapper } from "@/src/redux/store/configureStore";
import axios from "axios";
import { connect } from "react-redux";
import ConsultantChildrenComponents from "@/src/components/consultantChildren";
import { SetDoctor } from "@/src/redux/doctor/action";

const ConsultantChildrenPage = () => {
  return <ConsultantChildrenComponents />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  // convert address
  const name = context.params.name.replace(/-/g, " ");
  await axios
    .post("/api/consultant", {
      query: "doctor",
      name,
    })
    .then(async (res) => {
      await store.dispatch(SetDoctor(res.data));
    })
    .catch((err) => console.log(err));
});

export default connect((state) => state)(ConsultantChildrenPage);
