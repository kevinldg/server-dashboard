import "@/styles/globals.css";
import Header from "@/components/Header/Header";

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
