import Image from "next/image";
import Link from "next/link";

export default async function Courses() {
  const res = await fetch("http://localhost:5000/courses");
  const courses = await res.json();
  return (
    <div className="flex flex-col py-30 px-[15%]">
      <div className="flex flex-col items-center justify-center text-center mb-20 gap-5">
        <h1 className="text-4xl font-semibold">কোর্স সমূহ</h1>
        <p className="w-[70%] text-[16px] font-[300] leading-7">
          বর্তমান বিশ্বের ট্রেন্ডি এবং চাহিদাসম্পন্ন সব কোর্স রয়েছে ডেভজোন আইটি
          ইন্সটিটিউটে। কোর্স করার সময় যে প্রয়োজনীয় কনফিগারেশনের কম্পিউটার দরকার,
          তার সবই রয়েছে আমাদের ল্যাবে। আপনি চাইলেই ক্লাস শেষে ল্যাবে বসে কোর্স
          বিষয়ক যেকোনো কিছু প্র্যাকটিস করতে পারেন। প্রতিটি কোর্স এমনভাবে সাজানো
          হয়েছে, যাতে কোর্স শেষে প্রতিটি টপিকে কাজ করার আত্মবিশ্বাস আপনার থাকে।
        </p>
      </div>
      <div className="flex flex-wrap gap-10">
        {courses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <div className="card bg-base-800 w-96 shadow-sm border-1">
              <figure>
                <Image
                  className="h-[250px]"
                  src={course.image}
                  alt=""
                  width={700}
                  height={500}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{course.title}</h2>
                <p>{course.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
