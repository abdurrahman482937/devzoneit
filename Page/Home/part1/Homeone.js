import Image from "next/image";
import HeroImg from "@/public/DevZoneThumbnail.webp";

export default function HomeOne() {
  return (
    <div className="bg-[#091423] text-[#ffffff] px-[13%] h-auto flex justify-between items-center gap-10 pb-20 pt-10">
      <div className="w-[55%] flex flex-col gap-10">
        <h1 className="text-[55px] font-semibold">
          ক্যারিয়ার শুরু হোক দক্ষতার আত্মবিশ্বাসে <span>👋</span>
        </h1>
        <p className="text-[15px]">
          অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ডেভজোন আইটি ইনস্টিটিউট
          প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ৩০টিরও বেশি ট্রেন্ডি
          কোর্স থেকে আজই বেছে নিন আপনার পছন্দের কোর্স। 🚀 🚀
        </p>
        <div className="flex gap-5">
          <button className="heroButtonR">
            <p>ব্রাউজ কোর্স</p>
          </button>
          <button className="heroButton">
            <p>যোগাযোগ</p>
          </button>
        </div>
        <div className="flex justify-start gap-20">
          <div>
            <h4 className="text-[30px]">২০০০+</h4>
            <h6 className="text-[20px]">শিক্ষার্থী</h6>
          </div>
          <div>
            <h4 className="text-[30px]">২০+</h4>
            <h6 className="text-[20px]">শিক্ষক</h6>
          </div>
          <div>
            <h4 className="text-[30px]">৫০+</h4>
            <h6 className="text-[20px]">বিষয়</h6>
          </div>
        </div>
      </div>
      <div className="w-[35%]">
        <Image alt="Hero" src={HeroImg}></Image>
      </div>
    </div>
  );
}
