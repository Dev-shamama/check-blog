import React from "react";

const Index = async () => {
  const res = await fetch("http://localhost:3000/api/request");
  const result = await res.json();
  // console.log(result);
  return (
    <>
      <h1>Data Render</h1>
      {
        result?.data.map((item:any) => (
          <li key={item._id}>{item.color_name}</li>
        ))
      }
    </>
  );
};

export default Index;
