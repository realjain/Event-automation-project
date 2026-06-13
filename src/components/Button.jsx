// import React from 'react'

// const Button = ({onclick,name}) => {
//   return (
//     <>
//     <button className='rounded p-1 px-2 m-1 bg-red-500 text-white font-semibold' onClick={onclick}>{name}</button>
//     </>
//   )
// }

// export default Button

import React from 'react';

const Button = ({ onclick, name, disabled = false }) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ease-in-out transform focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500/50 shadow-md active:scale-95 active:shadow-sm ${
        disabled
          ? 'bg-red-400 text-white/80 cursor-not-allowed shadow-none'
          : 'bg-red-500 hover:bg-red-600 hover:shadow-lg text-white'
      }`}
      onClick={onclick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
