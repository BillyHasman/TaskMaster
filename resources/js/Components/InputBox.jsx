import React from "react";

export default function InputBox({
    idField,
    Icon,
    autoComplete = "off",
    type = "text",
    name,
    placeholder,
}) {
    return (
        <div className="relative flex items-center text-gray-500 focus-within:text-gray-800 pb-5">
            <Icon className="absolute size-6 ml-3" />
            <input
                id={idField}
                className="pr-3 pl-14 rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 w-full py-3 text-sm text-gray-500 focus:text-gray-800"
                autoComplete={autoComplete}
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
}
