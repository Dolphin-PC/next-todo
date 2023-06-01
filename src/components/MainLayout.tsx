import { ReactElement, ReactNode, ReactPropTypes } from "react";
import Header from "./Header";

interface PropTypes {
  children: ReactNode;
}
export default function MainLayout(props: PropTypes): ReactElement {
  return (
    <>
      {/* <Header /> */}
      <main className="p-2">{props.children}</main>
    </>
  );
}
