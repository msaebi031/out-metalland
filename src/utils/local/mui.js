import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

// اطلاعات cache برای rtl
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

// اطلاعات cache برای ltr
const cacheLtr = createCache({
  key: "muiltr",
});

// ادغام اطلاعات دو cache
const combinedCache = {
  rtl: cacheRtl,
  ltr: cacheLtr,
};

export { combinedCache as cache };
