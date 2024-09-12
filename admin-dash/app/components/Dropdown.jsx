"use client"

const Dropdown = ({children, className}) => {
  return (
    <div className={`relative ${className}`}>
        {children}
    </div>
  )
}

export default Dropdown;

export const DropdownButton = ({children, className, onClick}) => {
  return (
    <button className={`${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export const DropdownContent = ({children, className, style}) => {
  return (
    <div className={`absolute min-w-40 shadow z-10 overflow-hidden ${className}`} style={style}>
        {children}
    </div>
  )
}
