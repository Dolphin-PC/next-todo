"use client";
import { atom } from "recoil";

interface TodoType {
  id: string;
  content: string;
}

export const todoListState = atom<TodoType[]>({
  key: "todo",
  default: [],
});
