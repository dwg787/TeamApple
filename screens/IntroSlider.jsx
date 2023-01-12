import React, { useState, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const IntroSlider = () => {
  const navigation = useNavigation();

  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <View style={styles.container}>
          <View style={styles.container}>
            <Image style= {styles.logo} source={{uri : "https://user-images.githubusercontent.com/78587041/211985746-3774d3f0-8fd9-482a-824e-5590a3921d3d.png"}} />
            <Text style={styles.titleStyle}>유기동물 집찾아주기 프로젝트</Text>
            <Text style={styles.paragraphStyle}>애플펫이 앞장 서겠습니다.</Text>
            <Button
              title="다시 보기"
              onPress={() => setShowRealApp(false)}
              color="#fff"
            />
            <Button
              title="애플펫 시작하기"
              onPress={() =>
                navigation.navigate("NotTabs", { screen: "Login" })
              }
              color="#fff"
            />
          </View>
        </View>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          bottomButton
        />
      )}
    </>
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#0c68f2",
  },
  logo: {
    width: 200,
    height: 200,
    
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  paragraphStyle: {
    paddingTop: 50,
    paddingBottom: 100,
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  introImageStyle: {
    resizeMode: "stretch",
    width: "100%",
    height: "110%",
    position: "relative",
  },
  introTextStyle: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    position: "absolute",
    bottom: 300,
  },
  // introTitleStyle: {
  //   fontSize: 25,
  //   color: 'white',
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   position: 'fixed',
  // },
});

const slides = [
  {
    key: "s1",
    text: "하루에 193마리",
    title: "하루에 193마리",
    image: {
      uri: "https://user-images.githubusercontent.com/78587041/211697029-eed47a32-e388-4842-bd6d-b2587ecaf110.png",
    },
    backgroundColor: "#20d2bb",
  },
  {
    key: "s2",
    title: "",
    text: "유기 동물 한해 135,000 마리",
    image: {
      uri: "https://user-images.githubusercontent.com/78587041/211697040-c44d0834-ef13-416c-b1b9-57c96a0e7d38.png",
    },
    backgroundColor: "#febe29",
  },
  {
    key: "s3",
    title: "",
    text: "사지말고 입양하세요",
    image: {
      uri: "https://user-images.githubusercontent.com/78587041/211697050-39e00c76-cab4-41ee-a1e2-426115fa5c28.png",
    },
    backgroundColor: "#22bcb5",
  },
];
