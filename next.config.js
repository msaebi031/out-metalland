const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  ...nextTranslate(),
  swcMinify: true,
  env: {
    API_TOKEN: "RuOq4gdOYT-rgdgrd4tedgr",
    URL_API: "http://metalland.sevinselsmshsjs.site",
    AUTH_VIDEO:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIwNTUzZWI4NC1hZDRkLTRlMTMtYjdmOS0zYTZmMmEwODg4MWQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNzI4ODcwNCwiZXhwIjoxNzA3ODkzNTA0fQ.GDE__x4MUny1ixJ-Y4Ux_mKUGPFbkbZW752pAfhCBv0",
  },
};

module.exports = nextConfig;
