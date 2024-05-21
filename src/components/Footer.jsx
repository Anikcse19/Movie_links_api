import Center from "./Center"


const Footer = () => {
  return (
   <Center>
    <div className="bg-white p-3">
        <div className="bg-gray-300 flex items-center gap-3 py-3 px-2 rounded">
            <div className="w-[60%]">
                <p className=" text-[10px]">If you have created something new, and you dont want anyone to copy it or redistribute it without your permission, then you should put a Copyright Notice on your website.</p>
            </div>
            {/* menu */}
            <div className="w-[40%] josefin-sans-navs flex justify-between items-center gap-5 font-bold">
                <span>Home</span>
                <span>Blog</span>
                <span>Contact</span>
                <span>Demo1</span>
            </div>
        </div>
    </div>
   </Center>
  )
}

export default Footer
