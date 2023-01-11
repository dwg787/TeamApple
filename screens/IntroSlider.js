import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';

const IntroSlider = () => {
  const navigation = useNavigation();

  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip
              from any slide or Done button at last
            </Text>
            <Button
              title="다시 보기"
              onPress={() => setShowRealApp(false)}
            />
            <Button
              title="애플독 시작하기"
              onPress={() => navigation.navigate('NotTabs', { screen: 'Login' })}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    resizeMode: 'stretch',
    width: '100%',
    height: '110%',
    position: 'relative',
  },
  introTextStyle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    bottom: 300
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
    key: 's1',
    text: '하루에 193마리',
    title: '하루에 193마리',
    image: {
      uri:
        'https://user-images.githubusercontent.com/78587041/211697029-eed47a32-e388-4842-bd6d-b2587ecaf110.png',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: '',
    text: '유기 동물 한해 135,000 마리',
    image: {
      uri:
        'https://user-images.githubusercontent.com/78587041/211697040-c44d0834-ef13-416c-b1b9-57c96a0e7d38.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: '',
    text: '사지말고 입양하세요',
    image: {
      uri:
        'https://user-images.githubusercontent.com/78587041/211697050-39e00c76-cab4-41ee-a1e2-426115fa5c28.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: '',
    text: '',
    image: {
      uri:
        'https://user-images.githubusercontent.com/78587041/211697059-ade4c327-3bde-464c-94e0-1760b3b7208f.png',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: '',
    text: '',
    image: {
      uri:
        'https://user-images.githubusercontent.com/78587041/211697093-f2ebfcfe-b728-4c2d-9689-950e895004ec.png',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: '',
    text: '',
    image: {
      uri:
        'https://user-images.githubusercontent.com/78587041/211697071-afd0f892-7645-4345-8c68-96819051a257.png',
    },
    backgroundColor: '#febe29',
  },
];