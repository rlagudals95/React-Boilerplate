import React from "react";
import styled from "styled-components";
import { customAxios } from "../config/customAxios";
import kakaoLogin from "../assets/kakao_login.png";
import naverLogin from "../assets/naver_login.png";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function OAuth() {
  const dispatch = useDispatch();

  async function kakaoAuth() {
    const res = await customAxios.get("/login/getKakaoAuthUrl");
    console.log("소셜로그인 res : ", res.data);
    dispatch(userActions.setOauthType("kakao"));
    window.location.href = res.data;
  }

  async function naverAuth() {
    const res = await customAxios.get("/login/getNaverAuthUrl");
    console.log("소셜로그인 res : ", res.data);
    dispatch(userActions.setOauthType("naver"));
    window.location.href = res.data;
  }

  return (
    <BtnWrap>
      <OauthBtnKakao onClick={kakaoAuth}></OauthBtnKakao>
      {/* <OauthBtnNaver onClick={naverAuth}></OauthBtnNaver> */}
    </BtnWrap>
  );
}

export default OAuth;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto;
`;

const OauthBtnKakao = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  background: url(${kakaoLogin});
  background-size: cover;
  height: 65px;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  background-position: center;
`;

const OauthBtnNaver = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  background: url(${naverLogin});
  background-size: cover;
  height: 65px;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  background-position: center;
`;
