import * as React from "react";
import DatePicker from "../component/DatePicker";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useSelector, useDispatch} from "react-redux";
import { customAxios } from "../config/customAxios";


export default function BasicDatePicker({ history }) {
  const birthday = useSelector((state) => state.user.birthday);

  async function goHome() {
    let reqDto = {
      username: localStorage.getItem("username"),
      birthday,
    };

    customAxios
      .post("/setBirthday", reqDto)
      .then((response) => {
        console.log('생일설정..! : ',response);
        history.push("/");
        console.log('되라고 쫌!!')
      })
      .catch((err) => {
        alert("생일 등록에 실패 했습니다.");
      });
  }

  return (
    <FlexBox>
      {birthday}
      <GuideBox>생일을 선택해주세요</GuideBox>
      <DatePicker />
      <br />
      <Button onClick={goHome} variant="outlined">
        확인
      </Button>
      {/* <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button> */}
    </FlexBox>
  );
}

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding : 0px 20px;
`;

const GuideBox = styled.div`
  margin-bottom: 15px;
`;
