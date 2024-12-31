async function page({params}) {
    let {clientType}= await params
    console.log(clientType);
    
  return (
    <div className="w-[80%] bg-red-200 mx-auto">
        <div>
            Profile
        </div>
    </div>
  )
}

export default page