import React from 'react'

const Search = ({icon}) => {
  return (
    <div className="relative w-full max-w-sm">
      <input
        type="search"
        className={`w-full py-2 pr-4 border rounded-full placeholder:text-white placeholder:opacity-80 focus:outline-none focus:ring
          ${icon ? "pl-5" : "pl-4"}
        `}
      />
      {icon && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
    </div>
  )
}

export default Search