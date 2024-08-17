import { TodoData } from "@/app/types/types";
import { atom } from "recoil";

export const todoState = atom<TodoData[]>({
  key: "todoState",
  default: [],
});
