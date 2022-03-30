import React from 'react'
import { TouchableOpacity,View,Dimensions,StyleSheet } from 'react-native';
import ChoreCard from './ChoreCard'
import SingleChore from './SingleChore'

var  { width } = Dimensions.get("window");

const ChoreList = (props) => {

    const { item } = props;
    return (
       <TouchableOpacity  style={{ width: '50%' }}
       onPress={() => 
           props.navigation.navigate("Chore Detail", { item: item})
       }>
            <View style={{width: width / 2, backgroundColor:'gainsboro' }}>
                <ChoreCard {...item} />
            </View>
       </TouchableOpacity>
    )
}

export default ChoreList;

//const styles = StyleSheet.create({})
