import logo from "../../public/images/Epickmovies_logo.png";
import add from "../../public/images/add.png";
import joinTelegram from "../../public/images/joinTelegram.png";

const Downloads = () => {
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

      {/* main body */}
      <div className="my-5">
        <div className="w-[100%] mx-auto">
          <div className="aclonica-regular flex items-center justify-center text-xl text-gray-700">
            <span className="text-center">
              Select Pixel || From the Expedita voluptas officiis quaerat alias
              iure sunt.
            </span>
          </div>
          {/* NB ----> start*/}
          <div className="bg-gray-100 shadow-xl px-2 md:px-12 py-2 my-5">
            <div className="flex flex-col items-center py-2 gap-3 ">
              <span className="text-sm lg:text-[22px] text-center md:font-semibold flex gap-2">
                <p className="text-red-600 font-bold">
                  ডাউনলোড লিংক কাজ না করলে অনুগ্রহ করে পেজ রিফ্রেশ করুন । পেজ
                  রিফ্রেশ করতে নিচের রিফ্রেশ বাটনে ক্লিক করুন ।
                </p>{" "}
              </span>
            </div>
          </div>
          {/* NB ----> end*/}

          {/* refresh button */}
          <div className="w-full flex justify-center items-center">
            <span
              onClick={() => {
                window.location.reload();
              }}
              className="bg-yellow-400 shadow-lg px-12 py-4 rounded-md font-bold cursor-pointer"
            >
              Refresh Me
            </span>
          </div>

          {/* all links */}
          <div className=" mt-12">
            <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto  border-2 border-orange-400 flex flex-col gap-3 items-center justify-center py-8">
              <span className="bg-red-500 px-4 md:px-8 py-2 rounded  text-white">
                Fast Download (recommendation)
              </span>
              <span className="bg-red-500 px-2 md:px-5 py-2 rounded  text-white">
                Insatant Download---1
              </span>
              <span className="bg-[#FA9600] px-2 md:px-5 py-2 rounded  text-white">
                Insatant Download---2
              </span>
              <span className="bg-[#269500] px-2 md:px-5 py-2 rounded  text-white">
                Play/Watch Now
              </span>
            </div>
          </div>
        </div>
      </div>

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

export default Downloads;
