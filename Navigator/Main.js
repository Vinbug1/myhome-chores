import React,{useContext}from 'react'
import {  View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

// Stacks 
import HomeNavigator from './HomeNavigator';
import UserNavigator from './UserNavigator';
import DoneTaskNavigator from './DoneTaskNavigator';
import AuthGlobal from '../Context/store/AuthGlobal';


const  Tab = createBottomTabNavigator();
const Main = () => {
     const context = useContext(AuthGlobal)
    return (
        <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
            keyboardHidesTab: true,
            showLabel:false,
            activeTintColor: "#e91e63"
        }}
        >
        <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />

     
      <Tab.Screen
        name="History"
        component={DoneTaskNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="user-history" color={color} size={30} />
              <CartIcon />
            </View>
          ),
        }}
      />
      
         
      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
        </Tab.Navigator>
    )
}

export default Main;

//const styles = StyleSheet.create({})
