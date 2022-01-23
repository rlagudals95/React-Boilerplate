import React from "react";
import { Grid, Image, Input, Text } from "../elements";
import { history } from "../redux/configureStore";
import "../index.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//폰트를 테마형태로 덮어씌워서 보여줄 수 있음
import { useDispatch, useSelector } from "react-redux";

const Main = (props) => {
  console.log(props);

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
