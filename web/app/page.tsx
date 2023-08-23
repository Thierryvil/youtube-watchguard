"use client"

import { useState } from "react";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import { Main } from "./components/main";
import fetchData from "./services/api";
import { SearchResponse } from "./entities";


export default function Home() {
  const [minutes, setMinutes] = useState(Array(7).fill(0));
  const [searchData, setData] = useState<SearchResponse>();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Navbar minutes={minutes} fetchData={fetchData} setData={setData} setLoading={setLoading} />
      <div className="flex">
        <div className="w-1/4">
          <SideBar minutes={minutes} setMinutes={setMinutes} />
        </div>
        <div className="w-4/4">
          <main className="px-4">
            <Main searchData={searchData} isLoading={loading} />
          </main>
        </div>
      </div>
    </>
  );
}
