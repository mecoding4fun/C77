import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInandSignUp from './Screens/SignupLoginScreen';

export default class App extends React.Component {
  render(){
  return (
    <SignInandSignUp/>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
