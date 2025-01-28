import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
const VendorPostsGrid=({fetchVendorPosts,vendorMediaData,setData,id})=>{
    return(
        <>
        <InfiniteScroll
        className="w-[80%] mx-auto grid grid-cols-3 gap-1 mt-1"
        dataLength={vendorMediaData?.postsData?.length}
        next={fetchVendorPosts}
        loader={<h1 style={{ textAlign: 'center'}}>Loading</h1>}
        scrollThreshold={0.9}
        scrollableTarget={id}
        hasMore={vendorMediaData?.hasMorePost}
        endMessage={
            <p style={{ textAlign: 'center',width:"100%" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {
            vendorMediaData?.postsData?.map((item,pos)=>
              <div key={pos} className=" relative h-[30vh]">
              <Image style={{objectFit:'cover'}} alt="pics" fill={true} src={`${item?.src?.landscape}`}  />

              </div>
            )
          }
        </InfiniteScroll>
        </>
    )
}
export {VendorPostsGrid}