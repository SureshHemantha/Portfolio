import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
 
  return (
    <Fade bottom duration={1000} distance="20px">
      
    </Fade>
  );
}
