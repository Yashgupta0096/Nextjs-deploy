'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto p-4 flex justify-between items-center">
      <div className="flex justify-between items-center">
        <Image src="/assets/logo.png" alt="Logo" width={200} height={150} className="w-50 h-50" />
        <div className="hidden md:flex items-center gap-10 ml-6">
          <a href="#" className="hover:underline">Emotions</a>
          <a href="#" className="hover:underline">Manifesto</a>
          <a href="#" className="hover:underline">Self-awareness test</a>
          <a href="#" className="hover:underline">Work With Us</a>
        </div>
      </div>
      <div className="hidden md:block">
        <button className="btn min-h-12 min-w-40 bg-black text-white border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full">
          Download app
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10 flex flex-col items-center gap-4 py-4">
          <a href="#" className="hover:underline">Emotions</a>
          <a href="#" className="hover:underline">Manifesto</a>
          <a href="#" className="hover:underline">Self-awareness test</a>
          <a href="#" className="hover:underline">Work With Us</a>
          <button className="btn min-h-12 min-w-40 bg-black text-white border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full">
            Download app
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// src/components/Navbar.js or src/components/Navbar.tsx
// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="container min-h-10 mx-auto my-auto flex justify-between items-center">
//         <img src="/assets/logo.png" alt="" width={150} height={150} />
//         <div className='flex items-center gap-10'>
//             <a href="">Emotions</a>
//             <a href="">Manifesto</a>
//             <a href="">Self-awareness test</a>
//             <a href="">Work With Us</a>
//         </div>
//         <button className='btn min-h-12 min-w-40 bg-white text-[#7270dd] bg-black border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>Download app</button>
//     </div>
//   );
// };

// export default Navbar;

