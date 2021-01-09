import React , { useLayoutEffect }from "react"
import {createBottomTabNavigator}  from '@react-navigation/bottom-tabs'
import ChecklistStackScreen from "./ChecklistStack"
import ContractStackScreen from "./ContractStack"
import RoadmapStackScreen from "./RoadmapStack";
import MyPageStackScreen from './MyPageStack'

import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator();
export default ({navigation, route}) => {
    return (
    <Tabs.Navigator
     screenOptions ={({route}) => ({
        tabBarIcon: ({focused}) => {
     
            let iconName = Platform.OS === "ios" ? "ios-" : "md-"
            if( route.name === "Checklist" ){
                iconName += "checkbox-outline"
            } else if( route.name === "Roadmap"){
                iconName += "speedometer"
            } else if (route.name === "Contract"){
                iconName += "clipboard"
            } else {
                iconName += "home"
            } 

            return (<Ionicons
                name= {iconName}
                size={24} 
                color= { focused ? "black" : "grey"} 
                />)
        }
    })}
    >
        <Tabs.Screen name ="Checklist" component ={ChecklistStackScreen}/>
        <Tabs.Screen name ="Roadmap" component ={RoadmapStackScreen}/>
        <Tabs.Screen name ="Contract" component ={ContractStackScreen}/>
        <Tabs.Screen name ="Mypage" component ={MyPageStackScreen}/>
    </Tabs.Navigator>)
}
    