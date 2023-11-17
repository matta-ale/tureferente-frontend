import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import neighbourhoods from '../assets/filters/neighbourhoods.json';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-column items-center w-[340px] h-[340px] rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-white bg-black h-[50px] p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        Dropdown
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8"></AiOutlineCaretDown>
        ) : (
          <AiOutlineCaretUp className="h-8"></AiOutlineCaretUp>
        )}
      </button>
      {isOpen && (
        <div className="text-white text-lg font- font-bold p-4 bg-refPurple flex flex-col items-start rounded-lg w-full absolute top-52">
          {neighbourhoods.map((item,i) => (
            <div key={i}>
              <h3>{item.neighbourhood}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
