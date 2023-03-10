import "@/styles/globals.scss";

import Header from "@/components/blocks/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <div className="w-screen h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://placeimg.com/1024/768/any"
          alt="image"
        />
      </div>
    </>
  );
}
