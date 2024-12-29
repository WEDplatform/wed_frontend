function SearchSectionScroll() {
  return (
    <div className="w-[100%] ">
        <p>Title</p>
        <div className="w-[15vw] h-[10vh] flex bg-red-200 overflow-auto">
            {
                new Array(10).fill(0).map((item,pos)=>
                <div key={pos} className="w-[10vw] ml-2 h-[3vh] bg-gray-200">
h
                </div>
                )
            }
        </div>
    </div>
  )
}

export { SearchSectionScroll }