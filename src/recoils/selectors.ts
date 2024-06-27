import { selector } from "recoil";
import { userNameState } from "./atoms";

// 예시: 사용자의 이름 길이를 계산하는 셀렉터
export const userNameLengthState = selector<number>({
  key: "userNameLengthState",
  get: ({ get }) => {
    const userName = get(userNameState);
    return userName.length;
  },
});
