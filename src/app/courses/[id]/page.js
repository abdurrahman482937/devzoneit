import Image from "next/image";
import { HiCheckBadge } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import instructor from "@/assets/instructor.webp";

export default async function page({ params }) {
  const res = await fetch(`http://localhost:5000/courses/${params.id}`);
  const data = await res.json();
  return (
    <div className="px-[15%] py-15">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <Image
            src={data.image}
            width={700}
            height={400}
            className="w-[700px] h-[400px]"
            alt="image"
          ></Image>

          <div class="max-w-sm p-6 bg-red-50/50 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-xl flex flex-col items-start justify-between">
            <div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-2">
                <HiCheckBadge className="text-3xl text-red-500" />
                টোটাল ক্লাসঃ {data.totalClass}টি
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-2">
                <HiCheckBadge className="text-3xl text-red-500" />
                টোটাল {data.totalTime}+ ঘন্টা
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-2">
                <HiCheckBadge className="text-3xl text-red-500" />
                মার্কেটপ্লেস সম্পর্কে পর্যাপ্ত ধারনা
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-2">
                <HiCheckBadge className="text-3xl text-red-500" />
                কোর্স শেষে সার্টিফিকেট
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-2">
                <HiCheckBadge className="text-3xl text-red-500" />
                লাইফ টাইম সাপোর্ট
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <h5 class="mb-2 text-2xl leading-0 tracking-tight text-gray-900 font-[600]">
                কোর্স ফিঃ 0 টাকা
              </h5>
              <div className="flex items-center justify-center text-green-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="flex gap-5">
              <button class="inline-flex items-center justify-center w-35 px-4 py-3 text-xl font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300/0 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-700">
                ভর্তি
              </button>
              <button class="inline-flex items-center justify-center w-35 px-4 py-3 text-xl font-medium text-center text-white bg-zinc-900 rounded-lg hover:bg-zinc-950 focus:ring-4 focus:outline-none focus:ring-blue-300/0 dark:bg-zinc-900 dark:hover:bg-zinc-900 dark:focus:ring-zinc-800">
                ফ্রি সেমিনার
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-[800px] h-[480px] flex flex-col gap-5">
            <p className="text-[20px]">ওয়েব ডিভেলপমেন্ট খেলায় ক্যারিয়ার গড়তে</p>
            <h2 className="text-[40px] font-semibold">
              প্রফেশনাল ওয়েব ডিভেলপমেন্ট
            </h2>
            <p className="text-[15px]">
              ওয়েব ডেভেলপমেন্টের চাহিদা বেড়ে যাওয়ায় এখন সবাই মার্কেটাররা ওয়েব
              ডেভেলপমেন্টের দিকে ঝুঁকেছেন। তাই বিশ্বজুড়ে ওয়েব ডেভেলপমেন্টের
              চাহিদা এখন আকাশচুম্বী। এক জরিপে দেখা যায়, ভালো একটা ওয়েব সাইটের
              জন্য একটি ছোট প্রতিষ্ঠানও ৫০০ ডলার পর্যন্ত খরচ করে। আপনি কি ওয়েব
              ডেভলপমেন্ট এবং ডিজাইনের কাজ করতে ভালোবাসেন? তাহলে আপডেটেড মডিউল ও
              দক্ষ প্রশিক্ষকের সাথে আমাদের ওয়েব ডেভেলপমেন্ট কোর্সটি করার জন্য
              আমাদের সোশাল মিডিয়া প্লাটফর্মে জুক্ত থাকুন, ধন্যবাদ 💖💯
            </p>
          </div>

          <div class="max-w-[366px] h-auto rounded-lg text-xl flex flex-col items-start justify-between">
            <Image
              src={instructor}
              className="h-[380px] rounded-lg"
              alt="image"
            ></Image>
            <p className="text-[16px]">মেন্টর</p>
            <h4 className="text-[24px] font-[600]">মোঃ আলি শরিফ</h4>
            <p className="text-[14px]">প্রফেশনাল ওয়েব ডিভেলপার</p>
          </div>
        </div>
      </div>
    </div>
  );
}
