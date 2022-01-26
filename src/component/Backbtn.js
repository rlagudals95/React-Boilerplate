import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styled from 'styled-components'

function Backbtn({history}) {

  function goBack () {
      history.goBack();
  }

  return (
    <ArrowNavWrap>
        <ArrowBackIosIcon onClick={goBack}/>
    </ArrowNavWrap>);
}

export default Backbtn;

const ArrowNavWrap = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: start;
  width: 100%;
  background: #fff;
  padding: 15px 0px 15px 15px;
`;