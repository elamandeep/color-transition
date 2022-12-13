import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ChakraProvider>
        <Layout value={router._key}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
