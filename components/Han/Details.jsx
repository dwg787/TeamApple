import styled from "@emotion/native";
import DropShadow from "react-native-drop-shadow";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils";
import Item from "./Item";

export default function Details({ data }) {
  // console.log("params", data);
  return (
    <>
      <ScrollWrap>
        <DetailPictureBox>
          <DetailImage
            source={{
              url: `${data.popfile}`,
            }}
          />
        </DetailPictureBox>
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
          <Item data={data} />
        </DropShadow>
      </ScrollWrap>
    </>
  );
}

const ScrollWrap = styled.View`
  padding: 5%;
`;

const DetailImage = styled.Image`
  height: ${SCREEN_HEIGHT / 3 + "px"};
  width: ${SCREEN_WIDTH};
  border-radius: 10%;
`;

const DetailPictureBox = styled.View`
  width: ${SCREEN_WIDTH};
  height: ${SCREEN_HEIGHT / 3 + "px"};
  border-radius: 10%;
  margin-bottom: 5%;
  background-color: #b3b3b3;
`;
