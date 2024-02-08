import Layout from "@/src/container/layout";
import { Alert, AlertTitle, Box, Button, CircularProgress, Container, Typography } from "@mui/material";
import Link from "next/link";
// translate
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import Loading from "../global/loading";
import axios from "axios";

const PeymentComponent = ({ Authority, Status }) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const { t } = useTranslation("peyment");
  const host = typeof window !== "undefined" ? window.location.host : "";

  useEffect(() => {
    axios
      .post("/api/peyment", {
        query: "getZarinpal",
        Authority: Authority || "ok",
      })
      .then(async (res) => {
        await setResult(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <Layout float={false}>
      {loading ? (
        <Loading />
      ) : Status !== "OK" || !result?.result ? (
        <Alert severity="error">
          <Container>
            <AlertTitle>
              <Typography component="h1" variant="h6">
                {t("failed.title")}
              </Typography>
            </AlertTitle>
            <Typography component="p">{t("failed.dic")}</Typography>
          </Container>
        </Alert>
      ) : (
        <Box>
          <Alert severity="success">
            <Container>
              <AlertTitle>
                <Typography component="h1" variant="h6">
                  {t("success.title")}
                </Typography>
              </AlertTitle>
              <Typography component="p">
                {t("success.track")} {result.RefID}
              </Typography>
              <Typography component="p">
                {t("success.order")} #{result.data.id}
              </Typography>
              <Typography component="p">
                {t("success.name")} {result.data.name}
              </Typography>
              <Typography component="p">
                {t("success.consultation")} {result.data.category}
              </Typography>
              <Typography component="p">
                {t("success.time")} {result.data.time}
              </Typography>
              <Typography component="p">
                {t("success.videocall")}{" "}
                <Link href={`/videocall/${result.videocall}`} target="_blank">
                  {host}/videocall/{result.videocall}
                </Link>
              </Typography>
              <Typography component="p">{t("success.dic")}</Typography>
            </Container>
          </Alert>
        </Box>
      )}
      <Box className="text-center" pt={4}>
        <Link href="/">
          <Button variant="contained" size="large">
            {t("button")}
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default PeymentComponent;
