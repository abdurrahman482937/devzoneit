import Image from "next/image";

export default async function page({ params }) {
  const res = await fetch(`http://localhost:5000/courses/${params.id}`);
  const data = await res.json();
  return (
    <div className="px-[15%] py-15">
      <div className="flex">
        <Image
          src={data.image}
          width={1000}
          height={1000}
          className="w-[640px] h-[360px]"
          alt="image"
        ></Image>
        <div className="py-5">
          <p>টোটাল ক্লাসঃ {data.totalClass}টি</p>
          <p>টোটাল {data.totalTime}+ ঘন্টা</p>
          <p>মার্কেটপ্লেস সম্পর্কে পর্যাপ্ত ধারনা</p>
          <p>কোর্স শেষে সার্টিফিকেট</p>
          <p>লাইফ টাইম সাপোর্ট</p>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
