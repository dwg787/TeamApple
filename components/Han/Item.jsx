import styled from "@emotion/native";
import { SCREEN_HEIGHT } from "../../utils";
import { useColorScheme } from "react-native";
import { DARK_COLOR, ORANGE_COLOR } from "../../colors";

export default function Item({ data }) {
  const isDark = useColorScheme() === "dark";
  return (
    <DetailMainWrap style={{ backgroundColor: isDark ? "#212123" : "white" }}>
      <DetailTextWrap>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? ORANGE_COLOR : "black" }}>
              품종
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.kindCd}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? ORANGE_COLOR : "black" }}>
              성별
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.sexCd === "M" ? "남" : "W" ? "여" : "잡종"}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? ORANGE_COLOR : "black" }}>
              나이
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.age}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? ORANGE_COLOR : "black" }}>
              체중
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.weight}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox style={{ marginBottom: 20 }}>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? ORANGE_COLOR : "black" }}>
              색상
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.colorCd}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
      </DetailTextWrap>
      <DetailTextWrap>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? ORANGE_COLOR : "black" }}>
              공고번호
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.noticeNo}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? DARK_COLOR : "black" }}>
              유기번호
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.desertionNo}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? DARK_COLOR : "black" }}>
              상태
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.processState}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? DARK_COLOR : "black" }}>
              접수일
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.noticeSdt}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox style={{ marginBottom: 20 }}>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? DARK_COLOR : "black" }}>
              공고시작일
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.noticeEdt}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
      </DetailTextWrap>
      <DetailTextWrap>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? ORANGE_COLOR : "black" }}>
              발견 장소
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.happenPlace}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? DARK_COLOR : "black" }}>
              보호소 이름
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.careNm}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? DARK_COLOR : "black" }}>
              보호소 번호
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.careTel}
            </DetailTextContent>
          </DetailTextContentBox>
        </DetailTextBox>
        <DetailTextBox style={{ marginBottom: 20 }}>
          <DetailTextTitleBox>
            <DetailTextTitle style={{ color: isDark ? DARK_COLOR : "black" }}>
              보호소 주소
            </DetailTextTitle>
          </DetailTextTitleBox>
          <DetailTextContentBox>
            <DetailTextContent style={{ color: isDark ? "white" : "black" }}>
              {data.careAddr}
            </DetailTextContent>
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
