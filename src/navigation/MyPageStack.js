import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import MyPage from "../screens/MyPageTab/MyPage";
import Signup from "../screens/MyPageTab/Signup";
import Myinfo from "../screens/MyPageTab/Myinfo";
import Mydata from "../screens/MyPageTab/Mydata";


const MyPageStack = createStackNavigator();
function MyPageStackScreen(){
  return(
    <MyPageStack.Navigator>
      <MyPageStack.Screen name= "MyPage" component = {MyPage}></MyPageStack.Screen>
      <MyPageStack.Screen name= "Signup" component = {Signup}></MyPageStack.Screen>
      <MyPageStack.Screen name= "Myinfo" component = {Myinfo}></MyPageStack.Screen>
      <MyPageStack.Screen name= "Mydata" component = {Mydata}></MyPageStack.Screen>
    </MyPageStack.Navigator>
  )
}

export default MyPageStackScreen