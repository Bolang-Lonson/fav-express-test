const Modal = ({reference, children, open, className}) => {
    return (
        <dialog ref={reference} open={open} className={`backdrop:bg-[#2121217c] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}>
            {children}
        </dialog>
    )
}

export default Modal;