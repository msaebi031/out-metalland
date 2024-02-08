import PeymentComponent from "@/src/components/peyment";

const PeymentPage = ({ Authority, Status }) => {
  return <PeymentComponent Authority={Authority} Status={Status} />;
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { Authority, Status } = query;

  return {
    props: {
      Authority,
      Status,
    },
  };
}

export default PeymentPage;
