import React, { useState, useEffect, useRef } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { OffsetProvider } from "../contexts/OffsetContext";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  //const ref = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.body.style.overflow = "auto";
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <OffsetProvider>
        <Layout>
          <Component {...pageProps} loading={loading} />
        </Layout>
      </OffsetProvider>
    </>
  );
}

export default MyApp;
