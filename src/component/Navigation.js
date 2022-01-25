import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styled from "styled-components";
import {useEffect} from "react"

export default function SimpleBottomNavigation({history}) {
  const [value, setValue] = React.useState(0);

  function goMypage (){
    history.push("mypage");
  }

  useEffect (()=> {
    console.log('히스토리 ::', history);
  },[])

  return (
    <NavWrap>
      <BottomNavigationAction onClick={goMypage} label="Recents" icon={<RestoreIcon />} />
      {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
    </NavWrap>
  );
}

const NavWrap = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #fff;
`;
