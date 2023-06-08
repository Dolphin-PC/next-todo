"use client";
import TextField from "@/components/TextField";
import TodoItemList from "@/components/TodoItemList";
import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import TodoDetailPage from "./todo/[id]/page";

export default function MainPage(): ReactElement {
  return (
    <RecoilRoot>
      <div>
        <TextField label="TODO LIST" id="todo" />

        {/* Todo List Items */}
        <TodoItemList />
      </div>
    </RecoilRoot>
  );
}
