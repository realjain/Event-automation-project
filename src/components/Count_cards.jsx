// import React from 'react'

// const Count_cards = ({content,eventCount,noticeCount}) => {
//   return (
//     <>
//         <div className='rounded px-10 py-3 m-2  bg-gray-100 font-medium  text-black '>
//             {content==="Active Notices"?noticeCount:eventCount} {content}
//         </div>
//     </> 
//   )
// }

// export default Count_cards


import React from 'react'

const Count_cards = ({ content, eventCount, noticeCount }) => {
  // Determine count value based on content type
  const count = content === "Active Notices" ? noticeCount : 
               content === "Events" ? eventCount : 
               "0+";

  return (
    <div className="group bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      {/* Count Number */}
      <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
        {count}
      </div>
      
      {/* Label */}
      <p className="text-sm font-medium text-gray-600 uppercase tracking-wide leading-tight">
        {content}
      </p>
    </div>
  )
}

export default Count_cards
