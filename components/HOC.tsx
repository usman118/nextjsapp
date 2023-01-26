import axios from "axios";
import { useState, useEffect } from "react";
// import Image from "next/image";
import Navbar from "../components/Navbar";
export default function HOC(props: any) {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar setdarkMode={setDark} dark={dark} />
      <div className="flex flex-col items-center justify-center ">
        {props.children}
      </div>
    </div>
  );
}
