"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: ()=> void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-violet-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2">
      {children}
    </button>
  );
};
