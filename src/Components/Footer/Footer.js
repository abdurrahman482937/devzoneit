import React from "react";
import Image from "next/image";
import Logo from "@/assets/favicon.ico";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#091423] text-[#eaf1f5] h-[750px] w-[100%]">
      <div className="h-[45%] flex flex-col justify-center items-center text-center gap-5">
        <h1 className="text-[45px] font-semibold">সকল কোর্সে ভর্তি চলছে</h1>
        <h2 className="text-[14px] font-medium">
          ক্যারিয়ার গড়ার সিদ্ধান্ত নিতে আর দেরি নয়। অনলাইন বা অফলাইন যেকোনো
          কোর্সে আপনার <br /> সুবিধামতো সময়ে ভর্তি হয়ে যান এখনই।{" "}
        </h2>
        <button className="button">
          <p>ব্রাউজ কোর্স</p>
        </button>
      </div>
      <div className="h-[45%] w-[100%] px-[15%] flex justify-center items-center text-left gap-5">
        <div className="w-[35%]">
          <Image alt="Logo" src={Logo} height="55"></Image>
          <p className="text-left py-7">
            ডেভজোন আইটি বাংলাদেশের অন্যতম সেরা ই-লার্নিং স্কিল ডেভেলপমেন্ট
            প্ল্যাটফর্ম। দক্ষতা উন্নয়নের মাধ্যমে দেশ থেকে বেকারত্ব দূরীকরণ এবং
            বৈশ্বিক মানবসম্পদ তৈরিতে আমরা প্রতিশ্রুতিবদ্ধ। 💻
          </p>
          <div className="flex gap-2">
            <div className="bg-[#1778f2] text-[#f2f2f2] text-[22px] p-[13px] rounded-full">
              <FaFacebookF />
            </div>
            <div className="bg-[#ee01bb] text-[#f2f2f2] text-[22px] p-[13px] rounded-full">
              <FaInstagram />
            </div>
            <div className="bg-[#1778f2] text-[#f2f2f2] text-[22px] p-[13px] rounded-full">
              <FaLinkedin />
            </div>
            <div className="bg-[#ec444c] text-[#f2f2f2] text-[22px] p-[13px] rounded-full">
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="flex w-[65%]">
          <div className="text-left w-[30%]">
            <h2 className="text-[20px] font-semibold">কুইক লিংক</h2>
            <div className="text-[18px] flex flex-col py-10">
              <Link href="/">Home</Link>
              <Link href="/About">About</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="text-left w-[30%]">
            <h2 className="text-[20px] font-semibold">কোর্স</h2>
            <div className="text-[18px] flex flex-col py-10">
              <Link href="/mernstack">MERN Stack</Link>
              <Link href="/Nextjs">Next.js</Link>
              <Link href="/dropshipping">Shopify drop shipping</Link>
              <Link href="/jobhunting">Job Hunting</Link>
            </div>
          </div>

          <div className="text-left w-[39%]">
            <h2 className="text-[20px] font-semibold ">ঠিকানা</h2>
            <div className="text-[18px] flex flex-col py-10 gap-1">
              <p>House-06, Road-01, Sector-04, Uttara</p>
              <p>+880 1796 491068, +880 1728 353768</p>
              <p>student@devzoneit.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10%] flex flex-col justify-evenly items-center">
        <hr className="opacity-50 w-[100vw]"/>
        <h4 className="text-center">© 2025 DevZone IT™. All Rights Reserved.</h4>
      </div>
    </div>
  );
}
