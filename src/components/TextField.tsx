import { InputHTMLAttributes, ReactElement } from "react";

interface PropsType {
  label?: string;
}
export default function TextField(
  props: PropsType & InputHTMLAttributes<HTMLInputElement>
): ReactElement {
  const { label, ...rest } = props;
  return (
    <div>
      <label
        htmlFor={rest.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>

      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          {...rest}
          className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
