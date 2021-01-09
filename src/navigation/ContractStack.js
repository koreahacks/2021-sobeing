import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import Roadmap from "../screens/RoadmapTab/Roadmap";
import Tips from "../screens/RoadmapTab/Tips";
import Mydata from "../screens/MyPageTab/Mydata";



const RoadmapStack = createStackNavigator();
function RoadmapStackScreen(){
  return(
    <RoadmapStack.Navigator>
      <RoadmapStack.Screen name= "Roadmap" component = {Roadmap}></RoadmapStack.Screen>
      <RoadmapStack.Screen name= "Tips" component = {Tips}></RoadmapStack.Screen>
    </RoadmapStack.Navigator>
  )
}

export default RoadmapStackScreen
    
    