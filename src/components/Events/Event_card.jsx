// import React from "react";
// import Button from "../Button";

// const Event_card = ({
//   title,
//   date,
//   time,
//   location,
//   // onclick,
//   disabled = false,
//   variant,
//   category,
//   buttonText,
//   deadline,
//   no_of_registration,
// }) => {


// return (
//   <>
    
//           <div
//             className={`border-2 flex flex-col gap-3 border-gray-300 rounded p-4 
//               ${variant === "home" ? "w-1/3" : "w-full"}`}
//             >
//             <div className={`heading ${variant==="events"? "border-b-2 border-gray-200 text-xl": "bg-red-300"}  rounded p-2`}>
//               <h3 className="text-bold font-bold">{title}</h3>
//             </div>
//             {variant === "events" && disabled && (
//               <span className=" p-2 rounded-2xl font-semibold text-center text-black w-[80px] bg-green-200 ">
//                 {category}
//               </span>
//             )}
//             <div className={`content ${variant === "events" ? "" : "mt-2"}`}>
//               <p>{date} | {time}</p>
//               <p className="mt-1 text-gray-500 text-2 font-semibold">{location}</p>
//             </div>
//             {/* YOUR COMMENTED SECTION - PRESERVED */}
//             {/* <div className={`btn mt-1  border-gray-200 ${variant === "events" ? "flex border-t-2 items-center justify-between " : " ml-95"}`}>
//               {variant === "events" ? (
//                 <>
//                 <span><b>Register Before</b>:{deadline}</span>
//                 <div className="mt-3 "><Button onClick={onClick} name={buttonText} /></div>
//                 </>
//               ) : (<Button onClick={onClick} name={buttonText} />)}
//             </div>
//             <div>{variant === "events" && (<span className="text-gray-500">{no_of_registration} students registered</span>)}</div> */}
            
//             {variant === "events" && (
//               <div className="mt-3 border-t-2 border-gray-200 pt-3 grid grid-cols-2 items-center">
//                 <div className="flex flex-col gap-1  text-gray-600">
//                   <span><b className="text-gray-800">Register Before:</b> {deadline}</span>
//                   <span>{no_of_registration} students registered</span>
//                 </div>
//                 <div className="flex justify-end">
//                   <Button onClick={()=>alert("clicked")} name={buttonText} />
//                 </div>
//               </div>
//             )}
//           </div>
//         </>
//       )
// };
// export default Event_card;

//new css
//----------------------------------------------------------
import React from "react";
import Button from "../Button";

const Event_card = ({
  title,
  date,
  time,
  location,
  category,
  deadline,
  no_of_registration,
}) => {

  // Calculate days left for registration
  const calculateDaysLeft = () => {
    const today = new Date();
    const end = new Date(deadline);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysLeft = calculateDaysLeft();
  const isExpired = daysLeft < 0;

  return (
    <div className="w-full h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden relative">

      {/* Category Badge */}
      {category && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200">
            {category}
          </span>
        </div>
      )}

      {/* Main Header */}
      <div className="relative mb-6 pb-4 border-b-2 border-gray-100 group-hover:border-blue-200 transition-colors">
        <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        {/* Event Details */}
        <div className="space-y-1 text-sm">
          <p className="text-gray-700 font-medium flex items-center gap-2">
            📅 <span>{new Date(date).toLocaleDateString()}</span> |{" "}
            <span className="font-semibold">{time}</span>
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            📍 <span className="font-semibold">{location}</span>
          </p>
        </div>
      </div>

      {/* Registration Info */}
      <div className="space-y-4 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">
                Register Before:
              </span>
            </p>

            {isExpired ? (
              <p className="text-lg font-bold text-gray-500">Expired</p>
            ) : (
              <p className="text-lg font-bold text-red-600">
                {new Date(deadline).toLocaleDateString()}
              </p>
            )}
          </div>

          <div className="space-y-1 text-right">
            <p className="text-gray-500 text-xs">
              {no_of_registration}+ students registered
            </p>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(
                    (no_of_registration / 200) * 100,
                    100
                  )}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button
            onClick={() => alert("clicked")}
            name={isExpired ? "Closed" : "Register"}
            size="lg"
            disabled={isExpired}
          />
        </div>
      </div>
    </div>
  );
};

export default Event_card;