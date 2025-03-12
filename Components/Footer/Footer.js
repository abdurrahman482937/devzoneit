import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#091423] text-[#eaf1f5] h-[782px] w-[100%]">
      <div className="h-[50%] flex flex-col justify-center items-center text-center gap-5">
        <h1 className="text-[45px] font-semibold">সকল কোর্সে ভর্তি চলছে</h1>
        <h2 className="text-[14px] font-medium">
          ক্যারিয়ার গড়ার সিদ্ধান্ত নিতে আর দেরি নয়। অনলাইন বা অফলাইন যেকোনো
          কোর্সে আপনার <br /> সুবিধামতো সময়ে ভর্তি হয়ে যান এখনই।{" "}
        </h2>
        <button className="button">
          <p>ব্রাউজ কোর্স</p>
        </button>
      </div>
      <div className="h-[50%] flex flex-col justify-center items-center text-center gap-5">
        <h1 className="text-[#eaf1f5] text-[45px] font-semibold">সকল কোর্সে ভর্তি চলছে</h1>
      </div>
    </div>
  );
}
