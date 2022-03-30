import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View,Image,Input,Button,TouchableOpacity } from 'react-native'
import { loginUser } from '../../Context/actions/Auth.actions';

const login = (props) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    useEffect(() => {
        if (context.stateUser.isAuthenticated === true) {
            props.navigation.navigate("User Profile");
        }
    }, [context.stateUser.isAuthenticated]);

    const  handleSubmit = () => {
        const user = {
            email,
            password,
         }
         if (email === "" || password === "") {
             setError("both fields can not be empty");
         }else {
             loginUser(user,context.dispatch);
         }
    }
    return (
        <View style={styles.container}>
            <Image/>
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

            <TouchableOpacity>
                 <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmit()}>
                 <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default login

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
