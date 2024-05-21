import logo from "../../public/images/Epickmovies_logo.png";
import add from "../../public/images/add.png";
import joinTelegram from "../../public/images/joinTelegram.png";

const LinkLayout = ({ children }) => {
  return (
    <div className="w-[100%] md:w-[80%] mx-auto bg-white p-3 flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        {/* header */}
        <div className="w-[20%]">
          <img src={logo} alt="" />
        </div>
        {/* addvertise */}
        <div className="w-full">
          <img className="w-full" src={add} alt="" />
        </div>

        {/* telegram logo and join us telegram----> start*/}
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="w-[200px] md:w-[300px]">
            <img className="w-full" src={joinTelegram} alt="" />
          </div>
          {/* download link */}
          <div className="w-[300px] md:w-[400px]">
            <span className="text-lg md:text-2xl">
              🔴 খুব সহজে যেকোনো মুভি ও সিরিজের লিংক পেতে আমাদের টেলিগ্রাম
              গ্রুপে জয়েন করুন। 🔴
            </span>
          </div>
          <span
            onClick={() => {}}
            className="text-red-600 font-bold cursor-pointer"
          >
            Click me to join telegram
          </span>
        </div>
        {/* telegram logo and join us telegram----> end*/}

        {/* NB ----> start*/}
        <div className="bg-gray-100 shadow-xl px-2 md:px-12 py-2">
          <div className="flex flex-col gap-3">
            <span className="text-sm lg:text-[22px] md:font-semibold flex gap-2">
              <p className="text-red-600 inline">বিঃদ্রঃ</p>{" "}
              <p>
                আপনার পছন্দ মত যে কোন পিক্সেলে ক্লিক করলে ডাউনলোড পেজে চলে
                যাবেন।
              </p>{" "}
            </span>
            <span className="text-sm lg:text-[22px] md:font-semibold flex gap-2">
              <p className="text-red-600">Note:</p>{" "}
              <p>
                Select your desiger pixel and click it, the page will redirect
                to download page
              </p>
            </span>
          </div>
        </div>
        {/* NB ----> end*/}

        {/* addvertise */}
        <div className="w-full">
          <img className="w-full" src={add} alt="" />
        </div>
      </div>
      <div className="my-5">{children}</div>

      <div className="flex flex-col gap-3">
        {/* addvertise */}
        <div className="w-full">
          <img className="w-full" src={add} alt="" />
        </div>

        {/* telegram logo and join us telegram----> start*/}
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="w-[200px] md:w-[300px]">
            <img className="w-full" src={joinTelegram} alt="" />
          </div>
          {/* download link */}
          <div className="w-[300px] md:w-[400px]">
            <span className="text-lg md:text-2xl">
              🔴 খুব সহজে যেকোনো মুভি ও সিরিজের লিংক পেতে আমাদের টেলিগ্রাম
              গ্রুপে জয়েন করুন। 🔴
            </span>
          </div>
          <span
            onClick={() => {}}
            className="text-red-600 font-bold cursor-pointer"
          >
            Click me to join telegram
          </span>
        </div>
        {/* telegram logo and join us telegram----> end*/}
        {/* addvertise */}
        <div className="w-full">
          <img className="w-full" src={add} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LinkLayout;
