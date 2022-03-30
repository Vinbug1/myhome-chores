import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import {Content, Left, Body, ListItem, Thumbnail, Text} from 'native-base';

var { width} = Dimensions.get("window")

const SearchChores = (props) => {
    const {choresFiltered} = props;
    return (
        <Content style={{width: width}}>
        {choresFiltered.length > 0 ?(
            choresFiltered.map((item) => (
                <ListItem
                onPress={() =>{
                    props.navigation.navigate("chore Details",{item: item})

                }} 
                key={item.id}
                avater
                >
               
                <Body>
                    <Text>{item.name}</Text>
                    <Text note>{item.description}</Text>
                    <Text>{item.user}</Text>
                </Body>
                </ListItem>
            ))
        ):(
            <View style={styles.center}>
                <Text style={{alignself: 'center'}}>
                    No chores match the selected criteria
                </Text>
            </View>
        )}
            
        </Content>
    )
}

export default SearchChores;

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
         alignItems: 'center',
          height: 100
        }
    })
