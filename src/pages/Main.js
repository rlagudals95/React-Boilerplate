import React from "react";
import { Grid, Image, Input, Text } from "../elements";

import { history } from "../redux/configureStore";
import styled, { keyframes } from "styled-components";
import "../index.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//폰트를 테마형태로 덮어씌워서 보여줄 수 있음
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../shared/Cookie";

const Main = (props) => {
  console.log(props);

  const token = getCookie("token"); // is_login 이라는 키값을 가진 토큰 가져와라
  const is_cookie = token ? true : false; // 그리고 is_cookie로 토큰 유무판단

  const dispatch = useDispatch();

  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: "Noto Sans KR",
    },
  });

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <div>main page</div>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default Main;
