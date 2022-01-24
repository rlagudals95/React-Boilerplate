import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import OAuth from "../pages/OAuth";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import ScrollToTop from "../config/ScrollToTop";
import Home from "../pages/Home";
import Mypage from "../pages/Mypage"

function App() {
  return (
    <ReactContainer>
      <GlobalStyle />
      <InnerContainer>
        <ConnectedRouter history={history}>
          <ScrollToTop>
            {/* ScrollToTop을 이용해 페이지가 이동할 때마다 스크롤 최상단으로  */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/mypage" exact component={Mypage} />
              <Route path="/oauth" exact component={OAuth} />
            </Switch>
          </ScrollToTop>
        </ConnectedRouter>
      </InnerContainer>
      <AppBackground />
    </ReactContainer>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body{
  width: 100%;
  overflow-x: hidden;
  margin: 0 0 0 0;
  padding: 0;
  box-sizing: border-box;
}`;

const ReactContainer = styled.div`
  width: 100%;
  padding: 0;
  height: 100%;
  
`;
const InnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

const AppBackground = styled.div`
  background: url("https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80");
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0.7;
`;
