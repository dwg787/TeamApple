import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";

//민성 추가
import * as React from 'react';
import {  
  DarkTheme,
  DefaultTheme,
  NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Main from '../screens/Main.jsx';
import Settings from '../screens/Settings'
import Login from "../screens/Login";
import { darkTheme, lightTheme } from "../theme";
import { useColorScheme } from "react-native";
import Root from './Root';

const mainName = 'Main';
const SignUpName = 'SignUp';
const settingsName = 'Settings';
const loginName  = 'Login';
// 민성 추가

const Tab = createBottomTabNavigator();

export default function NavMainContainer() {
  const isDark = useColorScheme() === "dark";
  return (
  <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
  
    <Tab.Navigator
    initialRouteName={loginName}
        // 민성추가
        screenOptions={({route}) => ({
          "tabBarActiveTintColor": "tomato",
          "tabBarInactiveTintColor": "grey",
          "tabBarLabelStyle": {"paddingBottom": 10, "fontSize": 10},
          "tabBarStyle": [{"display": "flex"},
            null
          ]
        })}
        // tabBarOptions = {{
        //   activeTintColor : 'tomato',
        //   inactiveTintColor : 'grey',
        //   labelStyle : {paddingBottom:10, fontSize:10},
        //   style : {padding : 10, height : 70}
        // }}
        >

        <Tab.Screen name = {loginName} component = {Login}/>
        <Tab.Screen name = {mainName} component = {Main}/>
        <Tab.Screen name = {settingsName} component = {Settings}/>
    
    </Tab.Navigator>
    </NavigationContainer>
    
  );
};
