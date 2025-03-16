"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  return (
    <div className="flex flex-col">
      <div className="h-[364px] px-[15%] bg-[#091423] text-[#f2f2f2] flex flex-col justify-center items-center gap-15">
        <h2 className="text-[36px] text-center font-[600]">
          ক্যারিয়ার ও দক্ষতা নিয়ে ইন্ড্রাস্ট্রি লিডারদের থেকে <br /> টিপস নিন
        </h2>
        <div className="flex w-[500px] h-[45px] rounded-md bg-[#566881] justify-between items-center">
          <label className="input w-full bg-[#566881] flex justify-between">
            <input type="search" required placeholder="খুজুন..." />
          </label>
          <button className="h-full w-12 flex justify-center items-center cursor-pointer rounded-r-sm bg-[#06D889] text-[#000] join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="py-20 px-[15%] bg-[#f2f2f2]">
        <div className="flex flex-wrap gap-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-base-800 w-[400px] shadow-sm border-1"
            >
              <figure>
                <Image
                  className="h-[270px]"
                  src={blog.image}
                  alt={blog.slug}
                  width={700}
                  height={500}
                />
              </figure>
              <div className="card-body">
                <div className="flex gap-3 text-xs">
                  <div className="badge bg-[#FCE7E4] text-[#000] px-8 py-5">
                    {blog.topic}
                  </div>
                  <div className="badge bg-[#FCE7E4] text-[#000] px-8 py-5">
                    {blog.date}
                  </div>
                </div>
                <h2 className="card-title ">{blog.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
