import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
import { customAxios } from "../config/customAxios"

function Timezone({history}) {
  const [time, setTime] = useState("loading...");
  const birthday = useSelector((state) => state.user.birthday);
  //const [birthday, setBirthday] = useState("loading...");
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);


  async function clacDay() {

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
        if(isNaN(timeGap)){
          setTime('loading....')
        } else {
          setTime(timeGap);
        }
        now++;
        
      }, 1000);
    });
  }

  useEffect(() => {
    setTimeout(()=> {
      clacDay();
    },1000)
  }, [birthday]);

  return (
    <TimeBox>
       <TimeCnt>
        {time}
      </TimeCnt>
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


// function getBirth (){
//   let username = localStorage.getItem("usename");
//   if (!username) history.push('mypage')
  
//   const reqDto = { username : username };
//   customAxios
//     .post("/getBirthday", reqDto)
//     .then((res) => {
//       setBirthday(res.data.birthday);
//     })
//     .catch((err) => {
//       console.log("생일 가져오기 실패 :", err);
//     });
// }