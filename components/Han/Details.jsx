import styled from "@emotion/native";
import DropShadow from "react-native-drop-shadow";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils";

export default function Details() {
  return (
    <>
      <ScrollWrap>
        <DetailImage
          source={{
            url: "https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png",
          }}
        />
        <DropShadow
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
          }}
        >
          <DetailMainWrap>
            <DetailTextWrap>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>품종</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>고양이</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>성별</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>여</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>나이</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>2019(년생)</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>체중</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>5kg</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox style={{ marginBottom: 20 }}>
                <DetailTextTItleBox>
                  <DetailTextTitle>색상</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>귀여운 색</DetailTextContent>
              </DetailTextBox>
            </DetailTextWrap>
            <DetailTextWrap>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>공고번호</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>서울-xx-xxxx-xxxx</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>유기번호</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>xxxxxxxxxxxxxxxx</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>상태</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>보호중</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>접수일</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>2022-12-10</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox style={{ marginBottom: 20 }}>
                <DetailTextTItleBox>
                  <DetailTextTitle>공고시작일</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>2022-12-10</DetailTextContent>
              </DetailTextBox>
            </DetailTextWrap>
            <DetailTextWrap>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>공고번호</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>서울-xx-xxxx-xxxx</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>유기번호</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>xxxxxxxxxxxxxxxx</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>상태</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>보호중</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox>
                <DetailTextTItleBox>
                  <DetailTextTitle>접수일</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>2022-12-10</DetailTextContent>
              </DetailTextBox>
              <DetailTextBox style={{ marginBottom: 20 }}>
                <DetailTextTItleBox>
                  <DetailTextTitle>공고시작일</DetailTextTitle>
                </DetailTextTItleBox>
                <DetailTextContent>2022-12-10</DetailTextContent>
              </DetailTextBox>
            </DetailTextWrap>
          </DetailMainWrap>
        </DropShadow>
      </ScrollWrap>
    </>
  );
}

const ScrollWrap = styled.ScrollView`
  padding: 5%;
`;

const DetailImage = styled.Image`
  height: ${SCREEN_HEIGHT / 3 + "px"};
  width: ${SCREEN_WIDTH};
  border-radius: 10%;
  margin-bottom: 5%;
`;

const DetailMainWrap = styled.ScrollView`
  padding: 5% 7%;
  background-color: white;
  border-radius: 10%;
  height: ${SCREEN_HEIGHT / 2.5 + "px"};
`;

const DetailTextWrap = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 5%;
`;

const DetailTextBox = styled.View`
  flex-direction: row;
  text-align: center;
  margin-bottom: 1%;
`;

const DetailTextTItleBox = styled.View`
  width: 35%;
`;

const DetailTextTitle = styled.Text`
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  /* margin-right: 20%; */
`;

const DetailTextContent = styled.Text`
  font-weight: bold;
`;
