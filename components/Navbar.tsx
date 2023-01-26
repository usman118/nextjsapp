import { useEffect, useState } from "react";
import Link from "next/link";
const Navbar = (props: any) => {
  const toggleDarkMode = () => {
    props.setdarkMode(!props.dark);
  };
  const [btn, setBtn] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          document.getElementById("toggleHandle")?.classList.remove("hidden");
          setBtn(true);
        } else {
          document.getElementById("toggleHandle")?.classList.add("hidden");
          setBtn(true);
        }
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      className="fixed w-full h-20 top-0 flex flex-col md:flex-row justify-between items-center p-4 bg-blue-100 dark:bg-black text-black dark:text-white font-semibold 
             dark:border-b-4 dark:border-blue-600 shadow-xl shadow-blue-900  md:space-y-0"
    >
      <div className="flexs flex-row justify-between  w-full md:w-auto">
        <div className="flex flex-row  items-center ">
          <div className="flex flex-row w-full  font-bold text-2xl space-y-2  md:space-y-0 p-4 md:p-0">
            NEXTJS
          </div>
          <div className="flex md:hidden flex-row w-full  font-bold text-2xl space-y-2  md:space-y-0 p-4 md:p-0 justify-end">
            {/* TS */}

            <button
              className="flex flex-row items-center justify-center"
              onClick={() => {
                document
                  .getElementById("toggleHandle")
                  ?.classList.toggle("hidden");
                setBtn(!btn);
              }}
            >
              {btn ? <BtnSvg /> : <CrossSvg />}
            </button>
          </div>
        </div>
      </div>
      <div id="toggleHandle" className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col md:flex-row md:space-x-8 justify-center items-center  md:space-y-0 w-full  md:ml-36">
          <div className={style1}>
            <Link href="/">Home</Link>
          </div>
          <div className={style1}>
            <Link href="/about">About</Link>
          </div>
          <div className={style1}>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={style1}>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row items-center md:justify-items-end  md:space-y-0 md:space-x-8 w-full md:w-auto ">
          <div className={style2}>Login</div>
          <div className={style2}>Register</div>
          <div className={style2}>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => {
                  toggleDarkMode();
                }}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium ">
                {props.dark ? (
                  <span className="peer-checked:text-white p-2">Light</span>
                ) : (
                  <span className="peer-checked:text-white p-2">Dark</span>
                )}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
const style1 =
  "flex justify-center border-t-2 border-gray-800 md:border-0 w-full p-2 md:p-0 md:w-auto dark:border-gray-500  font-semibold text-xl ";
const style2 =
  "flex flex-row items-center border-t-2 border-gray-800 md:border-0 w-full p-2 md:p-0 md:w-auto justify-center dark:border-gray-500 font-semibold text-xl ";

const BtnSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};
const CrossSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
export default Navbar;
