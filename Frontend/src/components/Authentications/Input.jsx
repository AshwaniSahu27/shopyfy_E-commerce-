import React, { useId } from 'react'

function Input({ label, type, classname = "", ...props },ref) {
  const id = useId()

  return (
    <div className="w-full flex flex-col gap-2 py-3 ">
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} {...props} className={`${classname}  bg-zinc-300 outline-none  rounded-sm pl-2 w-full h-10`} />

    </div>
  )
}

export default Input