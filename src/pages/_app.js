import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
import axios from "axios";

import useLayoutStore from "@/store/useLayoutStore";
import useUserStore from "@/store/useUserStore";

export default function App({ Component, pageProps }) {
  const { setHeight } = useLayoutStore();
  const { login } = useUserStore();

  // const handleLogin = async (userNo) => {
  //   const { data } = await axios.post(
  //     "http://127.0.0.1:4000/api/v2/user/mobile/login",
  //     {
  //       loginType: "localStorage",
  //       userNo,
  //     }
  //   );
  //   if (data.message === "success login") {
  //     localStorage.setItem(
  //       "login",
  //       JSON.stringify({ loggedInUserNo: data.user.user_no })
  //     );
  //     login({ ...data.user, isLoggedIn: true });
  //   }
  // };

  useEffect(() => {
    if (localStorage.getItem("login")) {
      const userNo = JSON.parse(localStorage.getItem("login")).loggedInUserNo;
      // handleLogin(userNo);
    }
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
