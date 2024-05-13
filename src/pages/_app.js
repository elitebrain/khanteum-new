import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
import useLayoutStore from "@/store/useLayoutStore";

export default function App({ Component, pageProps }) {
  const { setHeight } = useLayoutStore();
  useEffect(() => {
    setHeight(window.innerHeight);

    window.onresize = (e) => {
      setHeight(e.target.innerHeight);
    };

    return () => {
      window.onresize = null;
    };
  }, []);
  return <Component {...pageProps} />;
}
