import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import kakaoLogin from "../assets/kakao_login.png";

const jsKey = "4205e8829366343b39451e3d60099dbe";
// jskey = 4205e8829366343b39451e3d60099dbe
// native = e0d51523e6f60d267a1b1a7d39eff6ac
// SDK는 한 번만 초기화해야 한다.
// 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
if (!window.Kakao.isInitialized()) {
  // JavaScript key를 인자로 주고 SDK 초기화
  window.Kakao.init(jsKey);
  // SDK 초기화 여부를 확인하자.
  console.log(window.Kakao.isInitialized());
}

export default function KakaoAuth() {
  const dispatch = useDispatch();

  function loginWithKakao() {
    console.log("리다이렉트 ::: ", process.env.REACT_APP_REDIRECT_URL);
    window.Kakao.Auth.authorize({
      redirectUri: process.env.REACT_APP_REDIRECT_URL,
    });
  }

  return (
    <OauthBtnKakao
      id="custom-login-bth"
      onClick={loginWithKakao}
    ></OauthBtnKakao>
  );
}

const OauthBtnKakao = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  background: url(${kakaoLogin});
  background-size: cover;
  height: 50px;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  background-position: center;
`;
