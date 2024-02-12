import { Box } from "@mui/material";
import Card_Comments from "../../global/swipers/card_comments";

/**Data Comment */
const Comments = () => {
  const data = [
    {
      img: "/img/home/comments/img-1.png",
      name: "Benjamin Smith",
      date: "October 9",
      job: "Psychology",
      dic: "Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla viverra orci tristique magna et. Sagittis enim ut gravida sed volutpat est arcu vitae ....",
    },
    {
      img: "/img/home/comments/img-2.png",
      name: "Sarah Green",
      date: "October 9",
      job: "Art",
      dic: "Lorem ipsum dolor sit amet consectetur. Neque nam sed a sit cras laoreet sed. Non felis lacus.",
    },
    {
      img: "/img/home/comments/img-3.png",
      name: "Benjamin Smith",
      date: "October 9",
      job: "Business",
      dic: "Lorem ipsum dolor sit amet consectetur. Felis in pretium ornare nunc facilisi tellus ornare massa. Posuere mauris cum pellentesque.",
    },
    {
      img: "/img/home/comments/img-4.png",
      name: "Benjamin Smith",
      date: "October 9",
      job: "Psychology",
      dic: "Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla viverra orci tristique magna et. Sagittis enim ut gravida sed volutpat est arcu vitae ....",
    },
  ];

  /**Data Comment */

  return (
    <Box mt={16}>
      <Card_Comments
        text={
          "Lorem ipsum dolor sit amet consectetur. Ut turpis nunc ac felis sapien diam. Sed velit dignissim viverra natoque. Ut mattis egestas "
        }
        data={data}
        title={"WHAT OUR PATIENTS SAY"}
      />
    </Box>
  );
};

export default Comments;
