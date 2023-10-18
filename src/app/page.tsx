"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/request");
    const result = await res.json();
    setData(result);
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(result);
  return (
    <>
      <h1>Data Render</h1>
      {data && data?.data.map((item: any) => (
        <li key={item._id}>{item.color_name}</li>
      ))}
    </>
  );
};

export default Page;
