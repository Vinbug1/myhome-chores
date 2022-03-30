import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { Left, Right, Container, H1 } from 'native-base';
import EasyButton from '../../Shared/StyledComponents/EasyButton';
import TrafficLight from '../../Shared/StyledComponents/TrafficLight';

import {connect} from 'react-redux';
//import * actions from '../../Redux/Action/'

const SingleChore = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [status, setStatus] = useState(null);
    const [statusText, setstatusText] = useState("")

    useEffect(() =>{
        if (props.route.params.item.status == 0) {
            setStatus(<TrafficLight unavailable></TrafficLight>);
            setStatusText("Unvailable")
        } else if (props.route.params.item.countInStock <= 5) {
            setStatus(<TrafficLight pending></TrafficLight>);
            setStatusText("Pending")
        } else {
            setStatus(<TrafficLight available></TrafficLight>);
            setStatusText("Available")
        }
        return () => {
            setStatus(null);
            setStatusText("");
        }
    }, [])

    return (
         <Container>
            <ScrollView>                        
                <View style={styles.contentContainer}>
                    <H1 style={styles.containerHeader}>{item.name}</H1>
                    <Text style={styles.containerText}>{item.Description}</Text>                  
                    <Text style={styles.containerText}>{item.Address}</Text>                  
                </View>
                <View style={styles.statusContainer}>
                    <View style={styles.status}>
                        <Text style={{marginLeft:10}}>
                            Status:{statusText}
                        </Text>
                        {status}
                    </View>
                    <Text style={styles.containerText}>{item.Duration}</Text> 
                    <Text style={styles.containerText}>{item.Cost}</Text>           
                </View>
                <View>
                    <Avatar 
                    position="absolute"
                    containerStyle={{
                        position: "absolute",
                        bottom: -15,
                        right: -5
                    }}
                    rounded
                    bottom={-15}
                    right={-5}
                    size={30}
                    source={{uri: user.image}} />
                    <Text style={styles.containerText}>{item.name}</Text>
                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <Left>
                    <Text style={styles.can}>Cancel</Text>
                </Left>
                <Right>
                   <EasyButton 
                   primary
                   medium
                    onPress={() => {props.addItemToCart(item.id),
                            Toast.show({
                                topOffset: 60,
                                type: "success",  
                                text1: `${item.name} added to Cart`,
                                text2: "Thank you for applying "
                            })
                    }}
                   >
                       <Text style={styles.app}>Apply</Text>
                   </EasyButton>
                </Right>
            </View>
         </Container>
    )
}


const mapToDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => 
            dispatch(actions.addToCart({quantity: 1, product}))
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%'
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 250
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: 'orange'
    },
    statusContainer: {
        marginBottom: 20,
        alignItems: "center"
    },
    status: {
        flexDirection: 'row',
        marginBottom: 10,
    },

    app: {
        fontSize: 24,
        margin: 20,
        color: 'blue'
    },
    can: {
        fontSize: 24,
        margin: 20,
        color: 'red'
    },
})

export default connect(null, mapToDispatchToProps)(SingleChore);
