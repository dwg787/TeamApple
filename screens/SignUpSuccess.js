import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpSuccess = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0c68f2",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../assets/success.png")}
        style={{
          height: 170,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />
      <Text style={styles.successTextStyle}>회원가입 성공!</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("NotTabs", { screen: "Login" })}
      >
        <Text style={styles.buttonTextStyle}>로그인 하러 가기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpSuccess;

const styles = StyleSheet.create({
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
  buttonStyle: {
    backgroundColor: "#F19936",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
