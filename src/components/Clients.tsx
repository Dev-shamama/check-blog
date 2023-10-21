"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const BlogPost = () => {
    const router = useRouter();
    const submitHandler = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/postdata`,
          {
            method: "POST",
            body: JSON.stringify({ title: "shamamabinshakil", description: "new" }),
            headers: { "content-type": "application/json" },
          }
        );
        const result = await res.json();
        console.log(result);
        if(result.success === true) {
            router.refresh();
        }
      };
    
  return (
    <button onClick={submitHandler}>Click Here!</button>

  )
}

export default BlogPost