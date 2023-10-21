import BlogPost from "@/components/Clients";
import React, { useEffect, useState } from "react";

const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getdata`, {
      cache: "no-cache",
    });
    const result = await res.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const Page = async () => {
  const data = await getData();
  console.log(data)
  return (
    <>
      <h1>Data Render</h1>
      <BlogPost />
      {data &&
        data.map((item: any) => {
          return <li key={item._id}>{item.title}</li>;
        })}
    </>
  );
};

export default Page;
