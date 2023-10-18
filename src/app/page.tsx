"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState<any[]>([]);
  const getData = async () => {
    const res = await fetch("https://check-blog.vercel.app/api/request", {method: "GET"});
    const result = await res.json();
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  
const submitHandler = async () => {
  const res = await fetch("http://localhost:3000/api/request", {
    method: "POST",
    body: JSON.stringify({title: "shamamabinshakil"}),
    headers: {'content-type': 'application/json'}
  });
  const result = await res.json();
  console.log(result)
}


  return (
    <>
      <h1>Data Render</h1>
      <button onClick={submitHandler}>Click Here!</button>
      {data && data.map((item: any) => (
        <li key={item._id}>{item.color_name}</li>
      ))}
    </>
  );
};

export default Page;
