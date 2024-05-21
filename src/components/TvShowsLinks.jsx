import React from 'react'

const TvShowsLinks = ({data}) => {
  return (
    <div className="w-[90%] mx-auto ">
      <div className="aclonica-regular flex items-center justify-center text-xl text-gray-700">
        <span className="text-center">
          Select Pixel || From the <p className="inline">{data?.post_title}</p>
        </span>
      </div>

      {/* all links */}
      <div className="w-[70%] mx-auto border-2 border-orange-400 flex flex-col items-center gap-5 py-5 my-5">
        {
          data?.download_links?.map((link,i)=>(
            <div className="flex flex-col items-center gap-3" key={i}>
              <span className="aclonica-regular font-bold">{`${link?.file_size} ${link?.px_quality}: `}</span>
              <div className="flex items-center gap-1 text-red-600 font-bold justify-between">
                {link?.row_set?.map((drive,i)=>(
                  <span onClick={()=>{
                    // window.open({drive.link})
                    window.open(`${drive.link}`)
                  }} className="hover:underline cursor-pointer font-bold" key={i}>{link?.row_set.length == i+1 ? `${drive?.drive_name}` : `${drive?.drive_name} |`}</span>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TvShowsLinks
