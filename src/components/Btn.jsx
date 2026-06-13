// import React, { useState } from 'react'

// const Btn = ({name}) => {
//     const [active,setActive]=useState(false)
//   return (
//     <>
//         <button onClick={()=>{
//            setActive(true)
//         }} className={`border-2 border-gray-200 px-4 py-2 font-bold text-gray-600   rounded text-center ${active?"bg-red-400 translate-y-2" :"text-gray-600"}`} 
//         >
//             {name}
//         </button>
//     </>
//   )
// }

// export default Btn


import React, { useState } from 'react'

const Btn = ({ name, active: initialActive = false }) => {
  const [active, setActive] = useState(initialActive)
  
  return (
    <button 
      onClick={() => setActive(!active)}
      className={`relative px-6 py-3 font-semibold text-sm uppercase tracking-wide rounded-xl border-2 transition-all duration-200 flex items-center gap-2 shadow-sm ${
        active 
          ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-200 hover:shadow-lg hover:-translate-y-0.5 hover:bg-red-700' 
          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5'
      }`}
    >
      {active && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )}
      {name}
    </button>
  )
}

export default Btn
