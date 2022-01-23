import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";

function Timezone() {
  const [time, setTime] = useState("loading...");
  const birthday = useSelector((state) => state.user.birthday);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);

  function getBirth() {
    dispatch(userAction.getUserInfo()).then(() => {
      let dday = new Date(birthday);
      //디데이 - 벌쓰데이  // - 현재 날짜++

      let now = new Date().getTime();
      dday.setFullYear(dday.getFullYear() + 80);
      console.log("80살 : ", dday);
      setInterval(function () {
        let timeGap = dday - now; // 태어어난 날로부터 80살 - 현재날짜
        // 테스트
        let _day = parseInt(timeGap / 3600);
        let _hour = parseInt(timeGap / 3600);
        let _min = parseInt((timeGap % 3600) / 60);
        let _sec = timeGap % 60;
        setTime(timeGap);
        now++;
        setFlag(true);
      }, 1000);
    });
  }

  useEffect(() => {
    getBirth();
  }, [birthday]);

  return (
    <TimeBox>
      <TimeCnt>{time}</TimeCnt>
    </TimeBox>
  );
}

export default Timezone;

const TimeBox = styled.div`
  font-weight: bolder;
  font-size: 10wv;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TimeCnt = styled.div`
  font-weight: bolder;
  font-size: 15wv;
`;
