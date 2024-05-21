import { CiSearch } from "react-icons/ci";
import logo from '../../public/images/Epickmovies_logo.png';
import Center from "./Center";



const Header = () => {
  return (
   <Center>
    <div className="bg-white px-3 py-1 flex items-center ">
        {/* logo */}
        <div className="w-[40%]">
            <img className="w-[50%]" src={logo} alt="" />
        </div>
        {/* menu and search */}
        <div className="w-[60%] flex items-center justify-between">
            {/* menu */}
            <div className="josefin-sans-navs flex justify-between items-center gap-5 font-bold">
                <span>Home</span>
                <span>Blog</span>
                <span>Contact</span>
                <span>Demo1</span>
            </div>

            {/* search */}
            <div>
                <div className="flex items-center relative">
                    <input className="px-2 outline-none border-2 border-black rounded-md" placeholder="Search here..." type="text" name="" id="" />
                    <CiSearch className="text-xl absolute right-2"/>

                </div>
            </div>
        </div>
    </div>
   </Center>
  )
}

export default Header
