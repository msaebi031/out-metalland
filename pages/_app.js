// mui
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { cache } from "../src/utils/local/mui";
import theme from "../src/theme";
// css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-toastify/dist/ReactToastify.css";
import "../public/css/main.css";
// redux
import { Provider } from "react-redux";
import { wrapper } from "../src/redux/store/configureStore";
// next-translate
import useTranslation from "next-translate/useTranslation";
import TypeDirection from "../src/utils/local/local";
import { useEffect, useState } from "react";
// axios
import axios from "axios";
// toast
import { ToastContainer } from "react-toastify";
import Router from "next/router";
import Loading from "@/src/components/global/loading";

export default function App({ Component, ...rest }) {
  const [loaderStatus, setLoaderStatus] = useState(false);

  Router.onRouteChangeStart = () => {
    setLoaderStatus(true);
  };

  Router.onRouteChangeComplete = () => {
    setLoaderStatus(false);
  };

  const [direction, setDirection] = useState("ltr");
  const { lang } = useTranslation("global");

  useEffect(() => {
    const directionFromLang = TypeDirection(lang);
    setDirection(directionFromLang);
    document.dir = directionFromLang;
  }, [lang]);

  // axios
  axios.defaults.baseURL = process.env.URL_API;
  axios.defaults.headers["Authorization"] = process.env.API_TOKEN;
  axios.defaults.headers.common["lang"] = "en";

  // redux
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <ThemeProvider theme={theme(direction)}>
      <CacheProvider value={cache[direction]}>
        <Provider store={store}>
          {loaderStatus ? (
            <>
              <Loading />
              <Component {...props.pageProps} />
            </>
          ) : (
            <Component {...props.pageProps} />
          )}
        </Provider>
      </CacheProvider>
      <ToastContainer theme="light" autoClose={3000} />
    </ThemeProvider>
  );
}
