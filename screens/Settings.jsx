import styled from '@emotion/native';
import { View, Text, Alert, useColorScheme } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils';
import { signOut } from 'firebase/auth';
import { authService, dbService } from '../firebase';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import profileImg from '../assets/profileImg.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { ORANGE_COLOR, BLUE_COLOR, DARK_COLOR } from '../colors';

export default function Settings() {
  const isDark = useColorScheme() === 'dark';
  const { navigate, setOptions, goBack } = useNavigation();
  const [textValue, setTextValue] = useState('');
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  const auth = getAuth();
  const user = auth.currentUser;
  const displayName = user?.displayName;

  const editNickName = async () => {
    await updateProfile(auth.currentUser, {
      displayName: textValue,
    })
      .then(() => {
        // console.log("textValue", "hihi");
        setTextValue(textValue);
      })
      .catch((error) => {
        console.log(error);
      });
    refreshUser();
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  const logout = () => {
    Alert.alert('로그아웃', '로그아웃 하시겠습니까?', [
      {
        text: '취소',
        style: 'cancel',
        onPress: () => console.log('취소 클릭!'),
      },
      {
        text: '로그아웃',
        style: 'destructive',
        onPress: () => {
          signOut(authService);
          navigate('NotTabs', { screen: 'Login' });
        },
      },
    ]);
  };

  // useNavigation의 setOptions를 사용하려면 useFocusEffect에서 사용해줘야 한다.
  // goBack으로 이전 페이지로 가지 않는 것을 처리해주기 위해 뒤로가기 버튼이 필요한 컴포넌트에서 각각 지정해줘야 한다.!!
  useFocusEffect(
    useCallback(() => {
      setOptions({
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign
              name='left'
              size={24}
              style={{ marginLeft: 16 }}
              color={isDark ? ORANGE_COLOR : BLUE_COLOR}
            />
          </TouchableOpacity>
        ),
      });
    }, [])
  );

  return (
    <>
      {!!user ? (
        <SettingWrap style={{ backgroundColor: isDark ? '#1B1D21' : 'white' }}>
          <SettingImage source={profileImg} />
          <ProfileView
            style={{ backgroundColor: isDark ? '#3320B3' : BLUE_COLOR }}
          >
            <ProfileTextWrap>
              <ProfileTitle>사용자 이름 수정</ProfileTitle>
              <ProfileTextInput
                placeholder='닉네임을 입력해주세요 ...'
                placeholderTextColor='#A8A8A8'
                value={textValue}
                onChangeText={setTextValue}
              />
              <Text>{displayName}</Text>
            </ProfileTextWrap>
            <ProfileButton onPress={editNickName}>
              <ProfileButtonText
                style={{ backgroundColor: isDark ? '#3320B3' : BLUE_COLOR }}
              >
                수정하기
              </ProfileButtonText>
            </ProfileButton>
          </ProfileView>
          <LogoutButton
            onPress={logout}
            style={{ backgroundColor: isDark ? '#3320B3' : BLUE_COLOR }}
          >
            <LogoutButtonText>로그아웃</LogoutButtonText>
          </LogoutButton>
        </SettingWrap>
      ) : (
        <VisitorView>
          <Text>로그인이 필요한 서비스입니다.</Text>
        </VisitorView>
      )}
    </>
  );
}

const SettingWrap = styled.View`
  flex: 1;
  padding: 10% 15%;
`;

const SettingImage = styled.Image`
  height: ${SCREEN_HEIGHT / 3.5 + 'px'};
  width: ${SCREEN_WIDTH / 2 + 'px'};
  margin-bottom: 10%;
  margin-left: 15%;
`;

const ProfileView = styled.View`
  justify-content: space-around;
  align-items: center;
  height: ${SCREEN_HEIGHT / 3.5 + 'px'};
  background-color: #0c68f2;
  border-radius: 20%;
`;

const ProfileTextWrap = styled.View`
  align-items: center;
  width: ${SCREEN_WIDTH / 2 + 'px'};
  border-bottom-width: 1px;
  border-bottom-color: white;
`;

const ProfileTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
`;

const ProfileTextInput = styled.TextInput`
  color: white;
  /* &::placeholder {
    color: #A8A8A8;
  } */
  margin-bottom: 3%;
`;

const ProfileButton = styled.TouchableOpacity`
  width: 150px;
  height: 30px;
  border-width: 1px;
  border-color: white;
  border-radius: 20%;
  justify-content: center;
  align-items: center;
`;

const ProfileButtonText = styled.Text`
  color: white;
`;

const LogoutButton = styled.TouchableOpacity`
  margin-top: 10%;
  border-radius: 30%;
  width: ${SCREEN_WIDTH};
  height: 50px;
  background-color: #0c68f2;
  justify-content: center;
  align-items: center;
`;

const LogInButton = styled.TouchableOpacity`
  margin-top: 10%;
  border-radius: 30%;
  width: ${SCREEN_WIDTH};
  height: 50px;
  background-color: #0c68f2;
  justify-content: center;
  align-items: center;
`;

const LogoutButtonText = styled.Text`
  color: white;
`;

const VisitorView = styled.View`
  height: ${SCREEN_HEIGHT / 1.5 + 'px'};
  justify-content: center;
  align-items: center;
`;
