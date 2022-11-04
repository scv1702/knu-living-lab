import React from "react";
import type { AppProps } from "next/app";
import "src/styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
