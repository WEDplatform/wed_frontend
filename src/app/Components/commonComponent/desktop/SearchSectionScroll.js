function SearchSectionScroll() {
  return (
    <div className="w-[100%]">
        <p>Title</p>
        <main className="flex flex-nowrap overflow-x-auto">
            {
                new Array(5).fill(0).map((item,pos)=>
                <div key={pos} className="w-[2vw] h-[3vh] bg-gray-200">

                </div>
                )
            }
        </main>
    </div>
  )
}

export { SearchSectionScroll }