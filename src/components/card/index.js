import {
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const CardComponent = () => {
  return (
    <Container>
      <Typography variant="title" className="pay_title">
        Card
      </Typography>
{/* items' table */}
      <Grid container className="pay_table" color="primary.main">
        <Grid xs={2}>Date</Grid>
        <Grid xs={2}>Item</Grid>
        <Grid xs={5}>Description</Grid>
        <Grid xs={2}>Price</Grid>
        <Grid xs={1}>Delete</Grid>
      </Grid>
{/* count payable amount */}
      <Box className="pay_fields">
        <Typography className="textfield_title">Sub Total</Typography>
        <input className="text_field justify-center" />
        <Typography className="textfield_title">Coupon Code</Typography>
        <Box container className="input-container">
          <input className="text_field coupon justify-center" />
          <button className="addcoupon pointer">Add Coupon</button>
        </Box>
        <Typography className="textfield_title">Grand Total</Typography>
        <input className="text_field justify-center" />
        <button className="checkout pointer">Check Out</button>
      </Box>

    </Container>
  );
};

export default CardComponent;
