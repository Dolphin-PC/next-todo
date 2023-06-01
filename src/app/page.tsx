import { ReactElement } from "react";
import TextField from "../components/TextField";

export default function Home(): ReactElement {
  return (
    <div>
      <p>TODO LIST</p>
      <TextField label="todo" id="todo" />
    </div>
  );
}
