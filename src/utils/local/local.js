/*
  // function for get && set direction site 
*/

const TypeDirection = (lang) => {
  switch (lang) {
    case "en":
      return "ltr";
    case "fa":
      return "rtl";
  }
};

export default TypeDirection;
