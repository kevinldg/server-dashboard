import Header from "@/components/Header/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="p-4 flex flex-col gap-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}
