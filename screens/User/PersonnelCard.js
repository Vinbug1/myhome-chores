import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { Avatar } from "react-native-elements";

var { width } = Dimensions.get('width');

const PersonalCard = (props) => {
    const {image,name,phone,address,skill,serviceCharge} = props;
    return (
        <View style={styles.container}>
         <View style={styles.topContainer}>
        <View style={styles.metaContainer}>
          <View>
            <Text style={styles.timings}>{
                name.length > 15 ? name.substring(0, 15 - 3)
                        + '...' : name
            }</Text>
            <Text style={styles.description}>
                {
                     address.length > 50 ? address.length .substring(0, 50 - 3)
                     + '...' : address.length
                }
            </Text>
          </View>
             <Text style={styles.ph}>Phone:{phone}</Text>
             <Text style={styles.sk}>Skill:{skill}</Text>
             <Text style={styles.cost}>ServiceCharge:{serviceCharge}</Text>
        </View>
        <Image
          source={{
            uri:image ?
                image: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
          }}
          style={styles.avatar}
        />
      </View>
     </View>
       
    )
}

export default PersonalCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0891b2',
        paddingVertical: '16',
        paddingHorizontal: '12',
        borderRadius: '5',
        alignSelf: 'center',
        width: '375',
        maxWidth: '100%',
      },
      timings: {
        color: '#fff',
        fontSize: '14',
      },
      metaContainer: {
        justifyContent: 'space-between',
      },
      topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      avatar: {
        height: '100',
        width: '100',
        borderRadius: '100',
      },
      description: {
        color: 'white',
        marginTop: '5',
        fontSize: '20',
      },    
      costText: {
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
        fontSize: '14',
      },
      phoneText: {
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
        fontSize: '14',
      },
      skillText: {
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
        fontSize: '14',
      },
})
