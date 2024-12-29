import { RiSearch2Line } from "react-icons/ri";
function Search() {
  return (
    <div className="w-[90%] h-[95%]">
        <p className="text-sm text-gray-500">Search</p>
        <div className="relative">
        <RiSearch2Line className="absolute text-gray-500 top-2 left-3 text-[25px]"/>    
        <input placeholder="Search keyword" type="text" className="w-[100%] text-sm text-gray-600 px-4 py-2 pl-10 bg-gray-200 rounded-lg outline-none  border-2 border-gray-300"/></div>
    </div>
  )
}

export {Search}