import React, { createContext, useState } from "react";

const openContext = createContext();
const Dropdown = ({children, className}) => {

    export const Button = ({children, className}) => {
        return (
          <button className={`${className}`}>
              {children}
          </button>
        )
    }
  return (
    <div className={`relative ${className}`}>
        {children}
    </div>
  )
}

export default Dropdown;



export const Content = ({children, className}) => {
  return (
    <div className={`absolute hidden min-w-40 shadow z-10 ${className}`}>
        {children}
    </div>
  )
}
