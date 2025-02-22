'use client'
import { RiSearch2Line } from "react-icons/ri";
import { SearchSectionScroll } from "./SearchSectionScroll";
import { searchSection } from "@/app/lib/constants";
import { useState } from "react";
function Search() {
  const [searchQuery,setQuery]=useState("");
  const [filterList,setFiterList]=useState([]);
  const [selectFilter,setFilter]=useState([]);
  const filterQueries = (query) =>{
    setQuery(query)
    if(query=="") {
      setFiterList(searchSection)
      return
    }
    let filteredQuery = searchSection
  .map((item) => ({
    title: item.title,
    value: item.value.filter((items) =>
      items.toLowerCase().includes(query.trim().toLowerCase())
    ),
  }))
  .filter((item) => item.value.length > 0); // Remove items with no matching values

console.log(filteredQuery);

    if(filteredQuery.length==0) return
    setFiterList(filteredQuery)
    
  }
  return (
    <div className="w-[90%] h-[95%]">
        <p className="text-sm text-gray-500">Search</p>
        <div className="relative">
        <RiSearch2Line className="absolute text-gray-500 top-2 left-3 text-[25px]"/>    
        <input value={searchQuery} onChange={(e)=>{filterQueries(e.target.value.toLowerCase())}} placeholder="Search keyword" type="text" className="w-[100%] text-sm text-gray-600 px-4 py-2 pl-10 bg-gray-200 rounded-lg outline-none  border-2 border-gray-300"/></div>
        <div className="w-[100%] preferenceList h-[90%] overflow-y-auto">
            {
                searchQuery != "" ? filterList.length>0?
                filterList.map((item,pos)=>
                  <SearchSectionScroll selectedFilter={selectFilter} setFilter={setFilter} key={pos} title={item.title} vals={item.value}/>
              )
                :
                <div>Nothing found</div>
                : searchSection.map((item,pos)=>
                <SearchSectionScroll selectedFilter={selectFilter} setFilter={setFilter} key={pos} title={item.title} vals={item.value}/>
            )
            }
        </div>
    </div>
  )
}

export {Search}