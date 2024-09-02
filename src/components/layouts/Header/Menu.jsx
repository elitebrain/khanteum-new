import React, { useState } from "react";
import axios from "axios";

import useLayoutStore from "@/store/useLayoutStore";
import useUserStore from "@/store/useUserStore";
import { DEV_API_URL } from "@/utils/constant";

const Menu = (props) => {
  const { isOpenMenu } = props;
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const user = useUserStore();
  const { height, headerHeight, gnbHeight } = useLayoutStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
    const { data } = await axios.post(`${DEV_API_URL}/user/mobile/login`, {
      loginType: "local",
      email: loginInput.email,
      password: loginInput.password,
    });
    if (data.message === "success login") {
      localStorage.setItem(
        "login",
        JSON.stringify({ loggedInUserNo: data.user.user_no })
      );
      user.login({ ...data.user, isLoggedIn: true });
    }
  };

  return (
    <div className="container">
      <div className="test">
        <input value={loginInput.email} onChange={handleChange} name="email" />
        <input
          type="password"
          value={loginInput.password}
          onChange={handleChange}
          name="password"
        />
        <button onClick={handleLogin}>로그인</button>
      </div>
      <style jsx>{`
        .container {
          position: absolute;
          top: 46px;
          right: ${isOpenMenu ? "0" : "-100vw"};
          height: ${height - (headerHeight + gnbHeight)}px;
          overflow: hidden;
          overflow-y: auto;
          width: calc(100% - 40px);
          max-width: 400px;
          background-color: #fff;
          border-top-left-radius: 35px;
          z-index: 1000;
          transition: 0.5s ease-in-out;
        }

        .test {
          margin-top: 40px;
          text-align: center;
        }
        .test > input {
          display: block;
          border: 1px solid #eee;
          border-radius: 4px;
          padding: 6px 12px;
          background-color: #fff;
          width: 200px;
          margin: 10px auto;
        }
        .test > button {
          width: 200px;
          border-radius: 4px;
          border: 1px solid #eee;
          padding: 6px 12px;
          background-color: #00d5c9;
          color: #fff;
          font-weight: 700;
        }

        @media (min-width: 768px) {
          .container {
            top: 70px;
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;
