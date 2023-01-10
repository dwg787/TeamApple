
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import styled from "@emotion/native";
import { TouchableOpacity } from 'react-native';

import firebase from '../firebase';

export default class Signup extends Component {


  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('계정과 암호를 입력해주세요.')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('로그인 성공')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <SignUpContainer>
        <HeaderContainer>
        <HeaderImg>
            <HeaderPic source ={require('../assets/adaptive-icon.png')} alt="" />
          </HeaderImg>
          <HeaderText><Text>동물들의</Text></HeaderText>
          <HeaderText><Text>행복한 시작을 함께 해주세요</Text></HeaderText>
          <HeaderText><Text></Text></HeaderText>
          <HeaderText><Text>회원가입</Text></HeaderText>
        </HeaderContainer>  

        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          placeholderTextColor="#fff"
          color = '#fff'
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          placeholderTextColor="#fff"
          color = '#fff'
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor="#fff"
          color = '#fff'
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <TouchableOpacity
          onPress={() => this.registerUser()}
          style= { 
            {
            width: 100,
            height: 40,
            borderRadius: 20, 
            marginTop: 70,
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#F19936'} 
            }>
          <Text style={{color: 'white', fontSize: 20,}}>회원가입</Text>
        </TouchableOpacity>
        <ToLoginText 
          onPress={() => this.props.navigation.navigate('Login')}>
          로그인 페이지로 돌아갈래요
        </ToLoginText>                          
      </SignUpContainer>
    );
  }
}

const HeaderContainer = styled.View`
margin-top : 70px;
margin-bottom: 50px;
display: flex;
flex-direction: column;
align-items: center;

`;

const HeaderText = styled.Text`
font-size: 30px;
font-weight: bold;
color: #fff;
margin-top: 20px;
text-align: center;
`;
const HeaderImg = styled.View`
margin-top : 20px;
width: 100px;
height: 100px;
`;
const HeaderPic = styled.Image`
width: 100%;
height: 100%;
`;

const SignUpContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
  background-color: #0c68f2;
`;

const ToLoginText = styled.Text`
  color: #fff;
  margin-top: 25px;
  text-align: center;
`;







const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1

  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});