import React from 'react';
import { StyleSheet, Text, View, Dimensions,Button, Pressable } from 'react-native';

var { width} = Dimensions.get('window'); 

const ChoreCard = (props) => {
    const {name,description,status,duration,cost} = props;
    return (

                <View style={styles.container}>
                    <View style={styles.topContainer}>
                            <View style={styles.metaContainer}>
                                            <View>                    
                                                <Text style={styles.title}>
                                                {
                                                    name.length > 9 ? name.substring(0, 9 - 3)
                                                    + '...' : name
                                                }
                                                </Text>
                                                <Text style={styles.descript}>
                                                {
                                                    description.length > 40 ? description.substring(0, 40 - 3)
                                                    + '...' : description
                                                }
                                                </Text>
                                                <Text style={styles.statusText}>Status: {status}</Text> 
                                                <Text style={styles.durationText}>Duration: {duration}</Text> 
                                                <Text style={styles.priceText}>pay/hr: ${cost}</Text>
                                            </View>  
                                          <Pressable style={styles.button}>
                                        <Text style={styles.buttonText}>Details</Text>
                                         </Pressable>     
                            </View>
                    </View>
            </View>
    )
}

export default ChoreCard;

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.8,
        padding: 10,
        borderRadius: 10,
        marginTop: 60,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
      },
      title: {
          fontWeight: 'bold',
        color: '#000000',
        fontSize: 14,
      },
      metaContainer: {
        justifyContent: 'space-between',
      },
      topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      avatar: {
        height: 100,
        width: 100,
        borderRadius: 100,
      },
      descript: {
        color: '#000000',
        marginTop: 5,
        fontSize: 16,
        marginBottom:3
      },     
      statusText: {
        fontWeight: 'normal',
        color: '#000000',
        textTransform: 'lowercase',
        fontSize:16,
      },
      durationText: {
        fontWeight: 'normal',
        color: '#000000',
        textTransform: 'lowercase',
        fontSize:16,
      },
      priceText: {
        fontWeight: 'bold',
        color: 'orange',
        textTransform: 'lowercase',
        fontSize:16,
      },
      button: {
        backgroundColor: '#22d3ee',
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
        marginTop:15
      },
      buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'lowercase',
        fontSize: 14,
      },
});
