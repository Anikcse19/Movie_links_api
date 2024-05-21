import React from 'react'

const ArticleCard = ({data}) => {
  return (
    <div className='flex flex-col gap-1 shadow-lg p-2 rounded-md'>
        <div className='rounded-md overflow-hidden'>
            <img src={data?.img} alt="" />
        </div>
        <span className='text-[13px] text-gray-500 px-2'>
            {data?.published}
        </span>
        <span className='font-bold text-base'>
            {
                data?.title
            }
        </span>
        <span className='text-[#6A6A6A] text-[14px]'>
            {data?.details}
        </span>
      
    </div>
  )
}

export default ArticleCard
