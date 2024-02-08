//mui
import { Box, Typography, Button, TextField, MenuItem, CardMedia, Card, CardContent, CircularProgress } from "@mui/material";
//icon
import { CgSortAz } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
//translate
import useTranslation from "next-translate/useTranslation";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { ChangeDown, ChangePageConsultant, ChangeTop, SaveAllConsultant } from "@/src/redux/consultant/action";

const Content = () => {
  const { t } = useTranslation("depression");
  const options = [t("rated.TopRated"), t("rated.DownRated")];
  const [searchValue, setSearchValue] = useState("");
  const [rated, setRated] = useState(0);
  const [loading, setLoading] = useState(false);
  // redux
  const { data, count, page, type } = useSelector((state) => state.consultant);
  const dispatch = useDispatch();
  // router
  const router = useRouter();

  const handleChangeFeild = (event) => {
    setRated(event.target.value);
    switch (event.target.value) {
      case 0:
        dispatch(ChangeTop());
        break;
      case 1:
        dispatch(ChangeDown());
        break;
    }
  };

  // convert address
  const convertToHyphen = (inputString) => inputString.replace(/\s+/g, "-");

  // handle request api
  const loadMore = async () => {
    setLoading(true);
    await axios
      .post("/api/consultant", {
        query: "getAll",
        limit: 50,
        offset: (page - 1) * 2,
        type,
      })
      .then(async (res) => {
        setLoading(false);
        await dispatch(SaveAllConsultant(res.data));
        await dispatch(ChangePageConsultant(page + 1));
      })
      .catch((err) => console.log(err, "losad"));
  };

  // search name
  const searchByName = async () => {
    await axios
      .post("/api/consultant", {
        query: "search",
        name: searchValue,
      })
      .then(async (res) => {
        await dispatch(SaveAllConsultant(res.data, true));
        await dispatch(ChangePageConsultant(2));
      });
  };

  return (
    <Fragment>
      <Box className="d-flex justify-beetwen align-center">
        {/* filter && search */}
        <Box className="d-flex justify-beetwen align-center">
          <TextField
            id="outlined-select-rated"
            select
            value={rated}
            onChange={handleChangeFeild}
            color="primary"
            SelectProps={{
              IconComponent: CgSortAz,
            }}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={index}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className="w-feild"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            placeholder={t("Search.placeholder")}
            sx={{ pl: 3 }}
            InputProps={{
              endAdornment: (
                <Button variant="contained" className="find font-semibold" onClick={() => searchByName()}>
                  {t("Search.button")}
                </Button>
              ),
            }}
          />
        </Box>
        {/* filter && search */}
        {/* count */}
        <Typography className="font-semibold" color="primary" variant="p" sx={{ display: { xs: "none", sm: "block" } }} pl={2}>
          {count} {t("Psychologists")}
        </Typography>
        {/* count */}
      </Box>
      {/* map items */}
      <Box>
        {data.map((item, index) => (
          <Card key={index} className="d-flex content">
            <CardMedia
              component="img"
              alt={item.name}
              image={process.env.URL_API + item.img || "/img/depression/no-photo.png"}
              sx={{ width: { xs: "170px", sm: "280px" } }}
            />
            <CardContent className="w-100">
              <Typography variant="h5" component="p" pb={1}>
                {item.name}
              </Typography>
              <Typography variant="body2" component="p" color="dark.main">
                {item.dic}
              </Typography>
              <Box className="d-flex justify-between align-center" pt={2.25} pb={2.25}>
                <AiFillStar className="star" />
                <Typography variant="subtitle1" component="p" pl={1}>
                  {item.star}
                </Typography>
                <Typography variant="subtitle1" component="p" pl={6}>
                  {item.Consultations} {t("Consultations")}
                </Typography>
              </Box>
              <Box pb={3}>
                {item.categorys.map((specialty, index) => (
                  <Typography
                    key={(index + 1) * 10000}
                    variant="subtitle1"
                    component="span"
                    className="category d-inline-block"
                    mr={1}
                    mt={1}
                  >
                    {specialty}
                  </Typography>
                ))}
              </Box>
              <Link href={router.pathname + "/" + convertToHyphen(item.name)}>
                <Button variant="contained" className="border-rounded w-100 font-bold">
                  {t("button")}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
        {/* map items */}
      </Box>

      {/*  Button Add more */}
      <Box pt={3} className="text-center" display={data.length >= count ? "none" : "block"}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button variant="outlined" size="large" className="border-rounded font-bold" onClick={() => loadMore()}>
            {t("load_more")}
          </Button>
        )}
      </Box>
      {/*  Button Add more */}
    </Fragment>
  );
};

export default Content;
