import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator,FlatList } from 'react-native';
import ChoreList from './ChoreList';

const  data = require('../../assets/data/chores.json');
const choresContainer = () => {
     const [chores, setChore] = useState([]);

     useEffect(() =>{
         setChore(data);

         return () => {
             setChore([]);
         }
     }, [])
    return (
        <View>
            <View style={{ marginTop: 100}}>  
                          
                <FlatList
                   numColumns = {2}                   
                    data={chores}
                    renderItem={({item}) =>  <ChoreList key={item} item={item} />}
                    keyExtractor = {item => item.name}
                />
            </View>
        </View>
        
    )
}

export default choresContainer;

//const styles = StyleSheet.create({})
