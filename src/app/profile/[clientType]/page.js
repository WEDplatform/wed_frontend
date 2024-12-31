async function page({params}) {
    let {clientType}= await params
    console.log(clientType);
    
  return (
    <div className="w-[80%] mt-5 flex justify-between mx-auto">
        <div className="w-[20%] aspect-square bg-white">
            Profile
        </div>
        <div className="w-[79%] ">
            <div className="h-[30vh] bg-red-200">

            </div>
            <div className="min-h-[30vh] bg-gray-300 mt-4">

            </div>
        </div>
    </div>
  )
}

export default page