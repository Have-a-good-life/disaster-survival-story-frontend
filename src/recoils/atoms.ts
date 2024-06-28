import { Situation } from "@/types/prompt";
import { atom } from "recoil";

export const progressState = atom({
  key: "progressState",
  default: 100,
});

export const situationState = atom<Partial<Situation>>({
  key: "situationState",
  default: {
    situationId: -1,
    situationName: "",
    situationDesc: "",
  },
});

export const evaluationState = atom<string>({
  key: "evaluationState",
  default: "",
});

export const injuryState = atom<string>({
  key: "injuryState",
  default: "",
});

export const currentPageState = atom({
  key: "currentPageState",
  default: "/",
});

export const manualOpenState = atom({
  key: "manualOpenState",
  default: false,
});
