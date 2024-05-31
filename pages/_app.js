import Link from "next/link";
import "@/styles/globals.css";

import Header from "@/components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}
