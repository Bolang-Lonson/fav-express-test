"use client"
import React, { createContext, useState } from "react";

const openContext = createContext();
const Dropdown = ({children, className}) => {
  return (
    <div className={`relative ${className}`}>
        {children}
    </div>
  )
}

export default Dropdown;

export const Button = ({children, className, onClick}) => {
  return (
    <button className={`${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export const Content = ({children, className, style}) => {
  return (
    <div className={`absolute right-0 min-w-40 shadow z-10 overflow-hidden ${className}`} style={style}>
        {children}
    </div>
  )
}
