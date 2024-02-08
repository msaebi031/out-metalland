import { ChangePageConsultant, ChangeType, SaveAllConsultant } from "@/src/redux/consultant/action";
import { Box, Typography, List, ListItem, ListItemText, Checkbox } from "@mui/material";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Filters = () => {
  const { t } = useTranslation("depression");
  const router = useRouter();
  const dispatch = useDispatch();

  const [checkedItems, setCheckedItems] = useState([]);
  const options = [
    { value: "Depression", label: t("filters.items.depression"), category: t("category") },
    { value: "Anxiety", label: t("filters.items.anxiety"), category: t("category") },
    {
      value: "Unhealthy eating",
      label: t("filters.items.unhealthy"),
      category: t("category"),
    },
    {
      value: "Life transitions,Relationship difficulties",
      label: t("filters.items.life"),
      category: t("category"),
    },
    {
      value: "Adjustmenu Issuces",
      label: t("filters.items.adjustment"),
      category: t("category"),
    },
  ];

  const groups = options.reduce((accumulator, option) => {
    if (accumulator[option.category]) {
      accumulator[option.category].push(option);
    } else {
      accumulator[option.category] = [option];
    }
    return accumulator;
  }, {});

  // Function to toggle checkbox status
  const toggleCheckbox = (value) => {
    const newCheckedItems = checkedItems.includes(value) ? checkedItems.filter((item) => item !== value) : [...checkedItems, value];
    setCheckedItems(newCheckedItems);
    if (!newCheckedItems?.length) {
      chengeFilter(false);
      delete router.query.category;
      router.push(router, undefined, { shallow: true });
    } else {
      chengeFilter(newCheckedItems);
      router.push(
        {
          ...router,
          query: {
            ...router.query,
            category: newCheckedItems.join("&"),
          },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  // handle request api
  const chengeFilter = async (type) => {
    await axios
      .post("/api/consultant", {
        query: "getAll",
        limit: 50,
        offset: 0,
        type,
      })
      .then(async (res) => {
        await dispatch(SaveAllConsultant(res.data, true));
        await dispatch(ChangePageConsultant(2));
        await dispatch(ChangeType(type));
      })
      .catch((err) => console.log(err, "losad"));
  };

  useEffect(() => {
    const { category } = router.query;
    if (category) {
      const decodedCategory = decodeURIComponent(category);
      const categoryValues = decodedCategory.split("&").map(decodeURIComponent);
      setCheckedItems(categoryValues);
    }
  }, [router.query]);

  return (
    <Box className="filters">
      <Box>
        <Typography color="primary" className="title font-semibold" pt={1}>
          {t("filters.title")}
        </Typography>
        <Box>
          {Object.entries(groups).map(([category, options]) => (
            <Box key={category}>
              <Typography pt={2} color="primary">
                {category}
              </Typography>
              <List>
                {options.map((option) => (
                  <ListItem key={option.value}>
                    <Box className="pointer d-flex align-center" onClick={() => toggleCheckbox(option.value)}>
                      <Checkbox
                        {...option.label}
                        value={option.value}
                        checked={checkedItems.includes(option.value)}
                        onChange={(e) => e.stopPropagation()}
                      />
                      <ListItemText>
                        <Typography color="dark.main">{t(option.label)}</Typography>
                      </ListItemText>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Filters;
