// mui
import { Breadcrumbs } from "@mui/material";
// icon
import { IoIosArrowForward } from "react-icons/io";
// next js
import { useRouter } from "next/router";
import Link from "next/link";

const Breadcrumb = () => {
  const { asPath } = useRouter();
  let pathnames = asPath
    .split("?")[0]
    .split("/")
    .filter((x) => x);
  pathnames = pathnames.map((item) => item.replace(/-/g, " "));

  return (
    <Breadcrumbs separator={<IoIosArrowForward />} aria-label="breadcrumb" pt={2} id="breadcrumbs">
      <Link href="/" className="normal">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <Link key={index} href={routeTo} className={isLast ? "active" : "normal"}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
