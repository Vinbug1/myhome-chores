import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Picker} from "native-base"
import Trafficients from "./StyledComponents/TrafficLight"
import Toast from "react-native-toast-message"
import AsyncStorage from '@react-native-async-storage/async-storage'
import  axios from "axios"
import baseURL from "../assets/common/baseUrl"

const codes = [
    {name: "pending",code: "3"},
    {name:"InProgress", code:"2"},
    {name:"Completed", code:"1"},
]

const ChoreHistory = (props) => {
    const [taskStatus, setTaskStatus] = useState();
    const [statusText, setStatusText] = useState();
    const [statusChange, setStatusChange] = useState();
    const [cardColor, setCardColor] = useState();

    useEffect(() => {
       if (props.status == "3") {
           setTaskStatus(<TrafficLight unApproved></TrafficLight>);
           setStatusText("pending");
           setCardColor("#E74C3C");
       }else if(props.status == "2"){
            setTaskStatus(<TrafficLight inProcess></TrafficLight>);
            setStatusText("inProgress");
            setCardColor("#F1C40F");
       }else if(props.status == "1"){
            setTaskStatus(<TrafficLight executed></TrafficLight>);
            setStatusText("complete");
            setCardColor("#2ECC71");
       }
       return () => {
           setTaskStatus();
           setStatusText();
           setCardColor();
       }
    },[])
}
 
// const updateTask ={
//     const config = {
//         he
//     }
// }

export default ChoreHistory

const styles = StyleSheet.create({})
