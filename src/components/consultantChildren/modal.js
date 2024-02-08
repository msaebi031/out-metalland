import { Backdrop, Box, Button, CircularProgress, Fade, IconButton, Modal, Typography } from "@mui/material";
import { Fragment, useState } from "react";
// icon
import { CloseRounded } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ModalBuy = ({ open, hanldeOpenModal }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // redux
  const { data, category, time } = useSelector((state) => state.doctor);

  const OpenZarinpal = async () => {
    setLoading(true);
    const newData = { ...data, email: "test@gmail.com", category: category[0], time: time[0] };

    await axios
      .post("/api/peyment", {
        query: "createZarinpal",
        amount: 1000,
        data: newData,
      })
      .then(async (res) => {
        if (res.data.result) {
          router.push(res.data.data.url);
        }
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };
  return (
    <Fragment>
      {/* modal show my subcriste */}
      <Modal
        open={open}
        onClose={hanldeOpenModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        disableAutoFocus
      >
        <Fade in={open}>
          <Box className="modal-buy" width={{ xs: "75%", md: "45%" }}>
            <IconButton aria-label="close" color="danger" size="medium" onClick={() => hanldeOpenModal()}>
              <CloseRounded fontSize="inherit" />
            </IconButton>

            <Typography component="p" variant="p">
              To finalize the good consultation time, only the payment step is left, please choose the desired portal for payment:
              <br />
              The cost of this consultation: $10
            </Typography>
            <Box textAlign="center" py={1.5}>
              <Button
                color="warning"
                variant="contained"
                size="large"
                sx={{ color: "#fff" }}
                onClick={() => OpenZarinpal()}
                disabled={loading}
              >
                zarinpal
                {loading ? <CircularProgress color="warning" size={25} /> : ""}
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* modal show my subcriste */}
    </Fragment>
  );
};

export default ModalBuy;
