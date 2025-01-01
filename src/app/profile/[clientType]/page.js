async function page({params}) {
    let {clientType}= await params
    console.log(clientType);
    
  return (
    <div className="w-[80%] mt-5 flex justify-between mx-auto">
        <div className="w-[20%] aspect-square bg-white">
            Profile
        </div>
        <div className="w-[79%] ">
            <div className="h-[30vh] grid grid-cols-2 grid-rows-3">
            {/* <div className="bg-red-300 flex flex-col justify-center pl-3">
                <p>Username</p>
                <h1>Ujjwal</h1>
            </div> */}
            </div>
            <div className="min-h-[30vh] bg-gray-300 mt-4">

            </div>
        </div>
    </div>
  )
}

export default page