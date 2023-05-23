import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "../styles/index.scss";
import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
