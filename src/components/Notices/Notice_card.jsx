// import React from 'react'
// import Button from '../Button'

// const Notice_card = ({title ,post_date,days,buttonText,description,variant}) => {
//   return (
//     <>
//         <div className={`card border-gray-200 rounded border-2 p-3  ${variant==="notices"?"w-full":"w-1/3"}`}>
//             <div className={`${variant==="notices"? "border-b-2 border-gray-100 pb-4":""}`}>
           
//             <h3 className={`font-bold ${variant==="notices"? "text-xl":""}`}>{title}</h3>
//             <div className='mt-2'>

//             <p className='font-medium text-gray-800'>{description}</p>
//             <p className='text-gray-500 font-medium mt-2'>Posted on: <span className='text-black font-normal'>{post_date}</span></p>
//             <p className='text-gray-500 font-medium'>Expires in: <span className='text-black font-normal'>{days} days</span></p>
//             </div>
//             </div>
//             <div className={`flex justify-end mt-2`}>

//                 <Button onclick={()=>{alert("View Details clicked")}} name={buttonText} />
//             </div>
//         </div>
//     </>
//   )
// }

// export default Notice_card



//new css
import React from "react";
import Button from "../Button";

const Notice_card = ({
  title,
  post_date,
  deadline,
  description,
}) => {
  // Calculate remaining days
  const calculateDaysLeft = () => {
    const today = new Date();
    const end = new Date(deadline);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const days = calculateDaysLeft();

  return (
    <div className="w-full h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
      
      {/* Header */}
      <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-100">
        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-xl text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>

      {/* Meta Info */}
      <div className="space-y-2 mb-6">
        <p className="text-sm text-gray-500 flex items-center gap-1">
          📅 Posted on:
          <span className="font-semibold text-gray-900">
            {new Date(post_date).toLocaleDateString()}
          </span>
        </p>

        <p className="text-sm text-gray-500 flex items-center gap-1">
          ⏰ Expires in:
          <span
            className={`font-semibold ml-1 px-2 py-1 rounded-full text-xs ${
              days <= 3
                ? "bg-red-100 text-red-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {days} days
          </span>
        </p>
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-4 border-t border-gray-50">
        <Button
          onClick={() => alert("View Details clicked")}
          name="View Details"
          size="sm"
        />
      </div>
    </div>
  );
};

export default Notice_card;