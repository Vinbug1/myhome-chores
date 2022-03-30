import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

 import ChoresContainer from '../screens/Chores/ChoresContainer';
 import SingleChore from '../screens/Chores/SingleChore';
import { Stack } from 'native-base';

 const stack = createStackNavigator();

function MyStack(){
    return (
        <Stack.Navigator>
        <Stack.Screen 
        name='Home'
        component={ChoresContainer}
        options={{
            headerShown: false,

        }}
    />
    <Stack.Screen 
        name='Chore Detail'
        component={SingleChore}
        options={{
            headerShown: false,
        }}
    />
        </Stack.Navigator>
    )
}

export default  function HomeNavigator () {
    return <MyStack />
}

//const styles = StyleSheet.create({})
