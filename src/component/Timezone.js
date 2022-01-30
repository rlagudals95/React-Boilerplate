import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
import { customAxios } from "../config/customAxios"

function Timezone({history}) {
  const [time, setTime] = useState(null);
  const birthday = useSelector((state) => state.user.birthday);
  //const [birthday, setBirthday] = useState("loading...");
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [type ,setType] = useState('sec');
  const [timeStr, setTimeStr] = useState(null);

  async function clacDay() {

    dispatch(userAction.getUserInfo()).then(() => {
      if(!birthday) history.push('/mypage');
      let dday = birthday ? new Date(birthday) : null;
      //디데이 - 벌쓰데이  // - 현재 날짜++
      let now = new Date().getTime()
      now = parseInt((now/1000)) 
 
      if(dday) {
        
        dday.setFullYear(dday.getFullYear() + 80);
        dday = parseInt(dday.getTime()/1000)
      
        setInterval(function () {
          let timeGap = dday - now; // 태어어난 날로부터 80살 - 현재날짜
          let min = parseInt(timeGap/60);
          let hour = parseInt(timeGap/60/60)
          let days = Math.floor(timeGap/60/60/24)
          let years = Math.floor(days/365)

          let timeStr = years + "년" + days + "일" + hour + "시간" + min + "분"
          setTimeStr(timeStr)
          //console.log('일 :',days)
          //console.log('년 :', years);
          // 테스트
          if(isNaN(timeGap)){
            setTime(null)
          } else {
            setTime(timeGap);
          }
          now++;         
        }, 1000);
      }
    });
  }

  function typeChange () {
    console.log('타입체인지!');
    if(type == 'sec'){
      setTime(timeStr);
      setType('timestamp')
    } else if(type == 'timestamp') {
      setTime(time);
      setType('sec')
    }
    
  }

  useEffect(() => {
      clacDay(); 
  }, [birthday]);

  return (
    <TimeBox>
       {/* <TimeCnt>
        {timeStr}
       </TimeCnt> */}
       <TimeCnt>
        {time ? time : 'loading...' }
      </TimeCnt>
      <br/>
      <TypeBtn onClick={typeChange}>
        Type change
      </TypeBtn>
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

const TypeBtn = styled.div`
  font-weight: bolder;
  font-size: 13wv;
  opacity: 0.7;
  cursor: pointer;
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