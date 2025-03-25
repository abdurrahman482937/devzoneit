import App from "./Card";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="h-[364px] px-[15%] bg-[#091423] text-[#f2f2f2] flex flex-col justify-center items-center gap-15">
        <h2 className="text-[66px] leading-0 text-center font-[600]">যোগাযোগ</h2>
        <p className="text-[16px] text-center">
          যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের পেজটি ভিজিট করতে পারেন।
          তাছাড়া হটলাইন নম্বরে কল করে জেনে <br /> নিতে পারেন ট্রেইনিং সংক্রান্ত
          যেকোনো তথ্য। এছাড়াও উল্লেখিত মেইলে কিংবা ফেসবুক ম্যাসেঞ্জারেও নক দিতে
          পারেন।
        </p>
      </div>
      <div className="py-20 px-[15%] bg-[#152733]">
          <div>
            <App />
          </div>
      </div>
    </div>
  );
}
