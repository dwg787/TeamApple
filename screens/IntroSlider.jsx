import React, { useState, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
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
            <Image
              style={styles.logo}
              source={require("../assets/logoWhite.png")}
              alt=''
            />
            <Text style={styles.titleStyle}>유기동물 집 찾아주기 프로젝트</Text>
            <Text style={styles.paragraphStyle}>애플펫과 함께해주세요.</Text>
            <Button
              title='다시 보기'
              onPress={() => setShowRealApp(false)}
              color='#fff'
            />
          </View>
          <View style={styles.apStartTextWrapper}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() =>
                navigation.navigate("NotTabs", { screen: "Login" })
              }
            >
              <Text style={styles.apStartText}>애플펫 시작하기</Text>
            </TouchableOpacity>
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
    marginTop: -30,
  },
  logo: {
    marginLeft: 30,
    marginBottom: 10,
    width: 150,
    height: 100,
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
  apStartTextWrapper: {
    // marginTop: 200,
  },
  apStartText: {
    position: "absolute",
    bottom: 210,
    fontSize: 20,
    fontWeight: "700",
    color: "#F19936",
  },
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
