"use client";
import { todoListState } from "@/atom";
import Link from "next/link";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";

export default function TodoItemList(): ReactElement {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <Link href={`/main/todo/${todo.id}`}>{todo.content}</Link>
          </li>
        );
      })}
    </>
  );
}
