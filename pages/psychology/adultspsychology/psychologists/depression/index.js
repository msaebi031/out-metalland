import DepressionComponent from "@/src/components/depression";
import { SaveAllConsultant } from "@/src/redux/consultant/action";
import { wrapper } from "@/src/redux/store/configureStore";
import axios from "axios";
import { connect } from "react-redux";

const DepressionPage = () => {
  return <DepressionComponent />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const query = context.query;
  if (query?.category) {
    var type = query?.category.split("&");
  }

  await axios
    .post("/api/consultant", {
      query: "getAll",
      limit: 50,
      offset: 0,
      type: type || false,
    })
    .then(async (res) => {
      await store.dispatch(SaveAllConsultant(res.data));
    })
    .catch((err) => console.log(err));
});

// you can also use Redux `useSelector` and other hooks instead of `connect()`
export default connect((state) => state)(DepressionPage);
