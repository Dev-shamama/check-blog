"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState<any[]>([]);
  const getData = async () => {
    const res = await fetch("https://check-blog.vercel.app/api/request");
    const result = await res.json();
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <h1>Data Render</h1>
      {data && data.map((item: any) => (
        <li key={item._id}>{item.color_name}</li>
      ))}
    </>
  );
};

export default Page;
