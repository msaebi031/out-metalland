import { Box, Collapse, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { Fragment, useState } from "react";
// icon
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ContentNavbar = ({ pages }) => {
  const [showFullText, setShowFullText] = useState(Array(2).fill(false));

  const handleToggleText = (index) => {
    const newShowFullText = [...showFullText];
    newShowFullText[index] = !newShowFullText[index];
    setShowFullText(newShowFullText);
  };

  return (
    <Box className="d-flex h-100 drawer" pt={1}>
      <Box className="w-100">
        {pages.map((item, index) => (
          <Fragment key={index}>
            {item.href ? (
              <Box py={2}>
                <Link href={item.href} className="title">
                  {item.name}
                </Link>
              </Box>
            ) : (
              <Box onClick={() => handleToggleText(index)} py={1}>
                <Box className="d-flex align-center justify-center title">
                  <Typography component="p">{item.name}</Typography>
                  <IconButton aria-label="Toggle Text">{!showFullText[index] ? <IoIosArrowDown /> : <IoIosArrowUp />}</IconButton>
                </Box>
                {/* hover */}
                <Collapse in={showFullText[index]}>
                  <Box component="ul" className="lists" textAlign="left">
                    {item.items.map((value, ind) => (
                      <Fragment key={ind + 1 * 100}>
                        {!value.items ? (
                          <Box component="li">
                            <Link href={value.href}>
                              <Typography component="span" variant="subtitle2">
                                {value.name}
                              </Typography>
                            </Link>
                          </Box>
                        ) : (
                          <>
                            {value.items.map((val, indexs) => (
                              <Box component="li" key={indexs + 2 * 1000}>
                                <Link href={val.href}>
                                  <Typography component="span" variant="subtitle2">
                                    {val.name}
                                  </Typography>
                                </Link>
                              </Box>
                            ))}
                          </>
                        )}
                      </Fragment>
                    ))}
                  </Box>
                </Collapse>
                {/* hover */}
              </Box>
            )}
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default ContentNavbar;
