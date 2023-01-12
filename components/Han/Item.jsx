import styled from "@emotion/native";
import { SCREEN_HEIGHT } from "../../utils";

export default function Item({ data }) {
  return (
    <DetailMainWrap>
      <DetailTextWrap>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle>품종</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.kindCd}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle>성별</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>
              {data.sexCd === "M" ? "남" : "W" ? "여" : "잡종"}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle>나이</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.age}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle>체중</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.weight}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox style={{ marginBottom: 20 }}>
          <DetailTextTitleBox>
            <DetailTextTitle>색상</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.colorCd}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
      </DetailTextWrap>
      <DetailTextWrap>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle>공고번호</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.noticeNo}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle>유기번호</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.desertionNo}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle>상태</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.processState}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle>접수일</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.noticeSdt}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox style={{ marginBottom: 20 }}>
          <DetailTextTitleBox>
            <DetailTextTitle>공고시작일</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.noticeEdt}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
      </DetailTextWrap>
      <DetailTextWrap>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle>발견 장소</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.happenPlace}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle>보호소 이름</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.careNm}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle>보호소 번호</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.careTel}</DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox style={{ marginBottom: 20 }}>
          <DetailTextTitleBox>
            <DetailTextTitle>보호소 주소</DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent>{data.careAddr}</DetailTextContent>
          </DetailTextContentBox>
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

const DetailTextTitleBox = styled.View`
  width: 35%;
`;

const DetailTextTitle = styled.Text`
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  /* margin-right: 20%; */
`;

const DetailTextContentBox = styled.View`
  width: 65%;
`;

const DetailTextContent = styled.Text`
  font-weight: bold;
`;
