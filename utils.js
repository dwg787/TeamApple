// 가로너비와 세로너비를 알아서 계산 등 util에 관련된 파일

import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");
