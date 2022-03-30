import React,{useState, useEffect}from 'react'
import { StyleSheet, Text, View,Image,Input,TouchableOpacity } from 'react-native';
import {keyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import axios from 'axios';

const register = (props) => {
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [sex,setSex] = useState("");
    const [category,setCategory] = useState("");
    const [skills,setSkills] = useState("");
    const [nin, setNin] = useState("");

    const  register = () => {
        if (name === "" ||
            email === "" ||
            password === "" ||
             phone === "" ||
             address === "" ||
             sex === "" ||
             category === "" ||
             nin === "" ) {
             setError("fields can not be empty");
        }
        let user = {
            name: name,
            image: image,
            email: email,
            password: password,
            phone: phone,
            address: address,
            sex: sex,
            category: category,
            skills: skills,
            nin: nin,
        }
        axios
           .post(`${baseURL}users/register`,user)
           .then((res) => {
               if (res.status == 200) {
                   Toast.show({
                       topOffset: 60,
                       type: 'success',
                       text1: "Registrations successfull",
                       text2:"Please Login into your account"
                   });
                   setTimeout(() => {
                       props.navigation.navigate("Login")
                   }, 500);
               }
           }).catch((err) => {
               Toast.show({
                   topOffset: 60,
                   type: 'error',
                   text1:"Something went wrong",
                   text2: "please try again",
               })
           });
    };
    return (
        <keyboardAwareScrollView
            viewIsInsideTabBar={true}
            extraHight={200}
            enableOnAdroid={true}
        >
        <View style={styles.container}>
        <Image/>
        <View style={styles.inputView}>
            <Input
            style={styles.textInput}
            placeholder={"Name"}
            id={name}
            value={name}
            placeholderTextColor="#003f5c"
            onChangeText={(name) =>setName(name)}
            />            
        </View>

        <View style={styles.inputView}>
            <Input
            style={styles.textInput}
            placeholder={"phone"}
            id={"phone"}
            value={"phone"}
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(phone) =>setPhone(phone)}
            />            
        </View>
        <View style={styles.inputView}>
            <Input
            style={styles.textInput}
            placeholder={"Email"}
            id={email}
            value={email}
            placeholderTextColor="#003f5c"
            onChangeText={(email) =>setEmail(email)}
            />            
        </View>

        <View style={styles.inputView}>
            <Input
            style={styles.textInput}
            placeholder={"password"}
            id={"password"}
            value={"password"}
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) =>setPassword(password)}
            />            
        </View>
        <View style={styles.inputView}>
            <Input
            style={styles.textInput}
            placeholder={"Address"}
            id={address}
            value={address}
            placeholderTextColor="#003f5c"
            onChangeText={(address) =>setAddress(address)}
            />            
        </View>

        <View style={styles.inputView}>
            <Input
            style={styles.textInput}
            placeholder={"Sex"}
            id={"sex"}
            value={"sex"}
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(sex) =>setSex(sex)}
            />            
        </View>
        <View style={styles.inputView}>
            <Input
            style={styles.textInput}
            placeholder={"Category"}
            id={category}
            value={category}
            placeholderTextColor="#003f5c"
            onChangeText={(category) =>setCategory(category)}
            />            
        </View>

        <View style={styles.inputView}>
            <Input
            style={styles.textInput}
            placeholder={"Skill"}
            id={"skill"}
            value={"skill"}
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(skill) =>setSkill(skill)}
            />            
        </View>
        <View style={styles.inputView}>
        <Input
        style={styles.textInput}
        placeholder={"Nin"}
        id={"nin"}
        value={"nin"}
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(nin) =>setNin(nin)}
        />            
    </View>

            <TouchableOpacity style={styles.loginBtn} onPress={() => register()}>
                        <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
        </View>
        </keyboardAwareScrollView>
       
    )
}

export default register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width:"70%",
        height:45,
        marginBottom: 20,
        alignItems: "center"
    },
    textInput:{
        height:50,
        flex:1,
        padding: 10,
        marginBottom: 30,
    },
    loginBtn:{
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems: "center",
        justifyContent: "center",
        marginTop:40,
        backgroundColor: "#FF1493"
    }
})
