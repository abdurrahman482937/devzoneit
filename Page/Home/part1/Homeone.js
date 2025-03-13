import Image from "next/image";
import HeroImg from "@/public/DevZoneThumbnail.webp";
import AnimatedEmoji from "@/Components/AnimatedEmoji/AnimatedEmoji";

export default function HomeOne() {
  return (
    <div className="bg-[#091423] text-[#ffffff] px-[15%] h-auto flex justify-between items-center gap-10 pb-[180px] pt-[90px]">
      <div className="w-[55%] flex flex-col gap-7">
        <h1 className="text-[52px] font-semibold">
          ক্যারিয়ার শুরু হোক দক্ষতার আত্মবিশ্বাসে <AnimatedEmoji />
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
            <h4 className="text-[33px]">২০০০+</h4>
            <h6 className="text-[20px]">শিক্ষার্থী</h6>
          </div>
          <div>
            <h4 className="text-[33px]">২০+</h4>
            <h6 className="text-[20px]">শিক্ষক</h6>
          </div>
          <div>
            <h4 className="text-[33px]">৫০+</h4>
            <h6 className="text-[20px]">বিষয়</h6>
          </div>
        </div>
      </div>
      <div className="w-[40%]">
        <Image alt="Hero" src={HeroImg}></Image>
      </div>
    </div>
  );
}
