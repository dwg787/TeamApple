import styled from "@emotion/native";
import { SCREEN_HEIGHT } from "../../utils";

export default function Item() {
  return (
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
  );
}

const DetailMainWrap = styled.View`
  padding: 5% 7%;
  background-color: white;
  border-radius: 10%;
  height: ${SCREEN_HEIGHT / 2 + "px"};
  margin-bottom: 20px;
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
