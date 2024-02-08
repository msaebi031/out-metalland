import { Button, Box, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { MdKeyboardArrowDown } from "react-icons/md";
import useTranslation from "next-translate/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import { errorTost } from "@/src/utils/toast/reactTostify";
import { SetInformation } from "@/src/redux/doctor/action";

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

const Select_Input = ({ hanldeOpenModal }) => {
  const { t } = useTranslation("consultantchildren");
  // item
  const itemType = [t("selectInput.itemType.videoCall")];

  const theme = useTheme();
  const [type, setType] = useState([]);
  const [time, setTime] = useState([]);
  const [itemTime, setItemTime] = useState([]);

  // redux
  const { data } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  const handleChange = (event, type) => {
    const {
      target: { value },
    } = event;
    if (type == "time") {
      setTime(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
      dispatch(SetInformation(typeof value === "string" ? value.split(",") : value, "time"));
    } else {
      setType(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
      dispatch(SetInformation(typeof value === "string" ? value.split(",") : value, "category"));
    }
  };

  // handle open peyment
  const openPeyment = () => {
    if (type.length < 1 || time.length < 1) return errorTost(t("selectInput.errorselect"));
    hanldeOpenModal();
  };

  useEffect(() => {
    const datas = [];
    data?.time?.map((item) => {
      item.time.map((clock) => {
        datas.push(`${item.day} - ${clock}`);
      });
    });
    setItemTime(datas);
  }, []);

  return (
    <Box mt={{ sm: 3, md: "auto" }}>
      <Select
        fullWidth
        className="celect1"
        IconComponent={() => <MdKeyboardArrowDown className="arrow" />}
        displayEmpty
        value={type}
        onChange={(e) => handleChange(e, "type")}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <Typography component="em">{t("selectInput.placeholder1")}</Typography>;
          }
          return selected.join(", ");
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        {itemType.map((name) => (
          <MenuItem key={name} value={name} style={getStyles(name, type, theme)}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <Select
        fullWidth
        className="celect2"
        IconComponent={() => <MdKeyboardArrowDown className="arrow" />}
        displayEmpty
        value={time}
        onChange={(e) => handleChange(e, "time")}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <Typography component="em">{t("selectInput.placeholder2")}</Typography>;
          }
          return selected.join(", ");
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        {itemTime.map((name) => (
          <MenuItem key={name} value={name} style={getStyles(name, time, theme)}>
            {name}
          </MenuItem>
        ))}
      </Select>

      <Button color="primary" className="font-bold" sx={{ color: "grey.light" }} variant="contained" onClick={() => openPeyment()}>
        {t("selectInput.startCounseling")}
      </Button>
    </Box>
  );
};
export default Select_Input;
