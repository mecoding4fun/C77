import React,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity,Alert,StyleSheet} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignInandSignUp extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
        }
    }
    userLogin = async(email,password)=>{
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                    alert('Hi!')
                }
            }
            catch(error){
                switch (error.code){
                    case 'auth/user-not-found':
                    Alert.alert('User Doesnt exist')
                    console.log("Enter valid email")
                    break;
                    case'auth/invalid-email':
                    Alert.alert('incorrect email or password')
                    console.log('invalid')
                    break;
                }
                
            }
        }
        else{
            alert('enter email and password')
        }
    }

    userSignUp = async(email,password)=>{
        if(email && password){
            try{
                const response = await firebase.auth().createUserWithEmailAndPassword(email,password);
                if(response){
                    alert('Done!')
                }
            }
            catch(error){
                switch (error.code){
                    case'auth/invalid-email':
                    Alert.alert('Enter Valid email')
                    console.log('invalid');
                    break;
                }
                
            }
        }
        else{
            alert('enter email and password')
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View><Text style={styles.title}>Barter System</Text></View>
                <View><TextInput
                 style={styles.loginBox}
                 placeholder="abc@example.com"
                 keyboardType='email-address'
                 onChangeText={(text)=>{
                     this.setState({
                         emailId:text
                     })
                 }}
                />
                <TextInput
                style={styles.loginBox}
                secureTextEntry={true}
                placeholder="Enter Password"
                onChangeText={(text)=>{
                    this.setState({
                        password:text
                    })
                }}
                />
                <TouchableOpacity
                style={[styles.button,{marginBottom:20,marginTop:20}]}
                onPress = {()=>{this.userLogin(this.state.emailId,this.state.password)}}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={[styles.button,{marginBottom:20,marginTop:20}]}
                onPress = {()=>{this.userSignUp(this.state.emailId,this.state.password)}}
                >
                <Text style={styles.buttonText}>Sign-Up</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    button:{
        width:200,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        alignSelf:'center',
        paddingLeft:10,
        borderRadius:80,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    buttonText:{
        fontSize:25,
        color:'#E66C3B',
        fontWeight:'bold'
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#E66C3B'
    }

})