"use client";
import { todoListState } from "@/atom";
import { InputHTMLAttributes, ReactElement, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getUid } from "../util/index";

interface PropsType {
  label?: string;
}
export default function TextField(
  props: PropsType & InputHTMLAttributes<HTMLInputElement>
): ReactElement {
  const { label, ...rest } = props;
  const [inputValue, setInputValue] = useState<string>("");

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const onAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(inputValue);

    setTodoList([...todoList, { id: getUid(), content: inputValue }]);
  };
  return (
    <div>
      <label
        htmlFor={rest.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>

      <div className="relative mt-2 rounded-md shadow-sm">
        <form onSubmit={onAddTodo}>
          <input
            {...rest}
            className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
