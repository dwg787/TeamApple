import styled from "@emotion/native";
import { View, Text } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils";
import { signOut } from "firebase/auth";
import { authService, dbService } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import profileImg from "../assets/profileImg.png";

export default function Settings() {
  // console.log(authService.currentUser.displayName);
  const [textValue, setTextValue] = useState("");
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  const auth = getAuth();

  const user = auth.currentUser;

  const displayName = user?.displayName;

  const editNickName = async () => {
    console.log(auth);
    // console.log(displayName);
    // console.log(displayName);
    await updateProfile(auth.currentUser, {
      displayName: textValue,
    })
      .then(() => {
        console.log("textValue", "hihi");
        setTextValue(textValue);
      })
      .catch((error) => {
        console.log(error);
      });
    refreshUser();
  };

  useEffect(() => {
    console.log("textValue", textValue);
  }, [textValue]);

  const { navigate } = useNavigation();

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
    signOut(authService)
      .then(() => {
        console.log("로그아웃 성공");
        navigate("NotTabs", { screen: "Login" });
      })
      .catch((err) => alert(err));
  };

  return (
    <SettingWrap>
      <SettingImage source={profileImg} />
      <ProfileView>
        <ProfileTextWrap>
          <ProfileTitle>사용자 이름 수정</ProfileTitle>
          <ProfileTextInput
            placeholder="닉네임을 입력해주세요 ..."
            placeholderTextColor="#A8A8A8"
            value={textValue}
            onChangeText={setTextValue}
          />
          <Text>{displayName}</Text>
        </ProfileTextWrap>
        <ProfileButton onPress={editNickName}>
          <ProfileButtonText>수정하기</ProfileButtonText>
        </ProfileButton>
      </ProfileView>
      <LogoutButton onPress={logout}>
        <LogoutButtonText>로그아웃</LogoutButtonText>
      </LogoutButton>
    </SettingWrap>
  );
}

const SettingWrap = styled.View`
  padding: 10% 15%;
`;

const SettingImage = styled.Image`
  height: ${SCREEN_HEIGHT / 3.5 + "px"};
  width: ${SCREEN_WIDTH / 2 + "px"};
  margin-bottom: 10%;
  margin-left: 15%;
`;

const ProfileView = styled.View`
  justify-content: space-around;
  align-items: center;
  height: ${SCREEN_HEIGHT / 3.5 + "px"};
  background-color: #0c68f2;
  border-radius: 20%;
`;

const ProfileTextWrap = styled.View`
  align-items: center;
  width: ${SCREEN_WIDTH / 2 + "px"};
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

const LogoutButtonText = styled.Text`
  color: white;
`;
