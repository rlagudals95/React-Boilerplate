import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from "styled-components"
import Button from "@mui/material/Button";
import { customAxios } from "../config/customAxios";

function Write() {
    const [content , setContent] = useState();

    function onChange (e) {
        setContent(e.target.value)
    }

  function post(){
    console.log('명언 제출!');

    let reqDto = {
        content
    }   
    customAxios
      .post("/maxim/post", reqDto)
      .then((response) => {
        alert('소중한 글귀 감사합니다 :)');
      })
      .catch((err) => {
        alert("글귀 등록에 실패 했습니다.");
      });

    console.log("reqDto :: ", reqDto)
  }

  return (
  <WriteBox>
      <WriteLabel>명언한줄로 서로 응원해요 :) </WriteLabel>
      <TextField onChange={onChange} style={{marginBottom: "15px"}} id="outlined-basic" label="여기에 입력하세요" variant="outlined" />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      <Button onClick={post} variant="outlined">
        제출
      </Button>  
  </WriteBox>
  );
}

export default Write;

const WriteBox = styled.div`
  font-weight: bolder;
  font-size: 10wv;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px
`;

const WriteLabel = styled.div`
  text-align : center;
  margin-bottom: 10px;
  opacity: 0.8;
`