import Image from "next/image";
import AboutImg from "@/assets/about/about.png";

export default function AboutOne() {
  return (
    <div className="flex flex-col">
      <div className="px-[15%] py-20 bg-[#091423a1] text-[#f2f2f2] flex justify-center items-start gap-15">
        <div>
          <h2 className="text-[65px] text-left font-[600]">আমাদের সম্পর্কে</h2>
          <p className="font-[500] leading-7">
            ডেভজোন আইটি ইন্সটিটিউট, ডেভজোন আইটিতে সাফল্য সৃষ্টির লক্ষ্যে
            প্রতিষ্ঠিত একটি বিশ্বস্ত প্রতিষ্ঠান। প্রতিষ্ঠা লগ্ন থেকে শুরু করে
            এখন পর্যন্ত সুদীর্ঘ ১৩ বছরে ক্রিয়েটিভ আইটি অর্জন করেছে বহুমুখী
            সাফল্য। অবদান রেখে চলেছে ডিজিটাল বাংলাদেশ নির্মাণে বাংলাদেশের অন্যতম
            প্রধান আইটি প্রতিষ্ঠানটি ২০০৮ সাল থেকে বেকার সমস্যা দূর করতেও
            গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে।
          </p>
        </div>
        <Image src={AboutImg} alt="img"></Image>
      </div>
    </div>
  );
}
