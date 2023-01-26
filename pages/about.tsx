import { useState, useEffect, useContext } from "react";
import HOC from "@/components/HOC";
import { fetchData } from "@/components/FetchData";
export default function Home() {
  type Data = {
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  };
  const [data, setData] = useState({} as Data);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) {
      fetchData().then((res) => {
        setData(res);
        setLoading(true);
      });
    }
  }, [loading]);

  return (
    <>
      {/* context */}
      <HOC>
        <main className=" flex flex-col items-center justify-center w-full flex-1 text-center dark:bg-black min-h-screen">
          {loading === true ? (
            <h1 className="text-6xl font-bold dark:text-blue-600">
              {data ? data.name : ""}
            </h1>
          ) : (
            <h1 className="text-6xl font-bold dark:text-blue-600">
              Loading...
            </h1>
          )}
        </main>
      </HOC>
    </>
  );
}
