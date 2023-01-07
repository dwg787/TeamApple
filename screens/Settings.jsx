import styled from "@emotion/native";
import { View, Text } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils";

export default function Settings() {
  return (
    <SettingWrap>
      <SettingImage
        source={{
          url: "https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png",
        }}
      />
      <ProfileView>
        <ProfileTextWrap>
          <ProfileTitle>사용자 이름 수정</ProfileTitle>
          <ProfileTextInput
            placeholder="닉네임을 입력해주세요 ..."
            placeholderTextColor="#A8A8A8"
          />
        </ProfileTextWrap>
        <ProfileButton>
          <ProfileButtonText>수정하기</ProfileButtonText>
        </ProfileButton>
      </ProfileView>
      <LogoutButton>
        <LogoutButtonText>로그아웃</LogoutButtonText>
      </LogoutButton>
    </SettingWrap>
  );
}

const SettingWrap = styled.View`
  padding: 10% 15%;
`;

const SettingImage = styled.Image`
  height: ${SCREEN_HEIGHT / 4 + "px"};
  width: ${SCREEN_WIDTH};
  margin-bottom: 10%;
`;

const ProfileView = styled.View`
  justify-content: space-around;
  align-items: center;
  height: ${SCREEN_HEIGHT / 3 + "px"};
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
