import InfiniteScroll from "react-infinite-scroll-component";
import { VideoPlayer } from "../VideoModal.js/VideoPlayer";
const VendorReelGrid=({id,vendorMediaData,fetchVendorReels,setData})=>{
    return(<>
    <InfiniteScroll
    dataLength={vendorMediaData?.reelData}
    className="w-[80%] mx-auto grid grid-cols-3 gap-1 mt-1"
    next={fetchVendorReels}
    loader={<h1 style={{ textAlign: 'center'}}>Loading</h1>}
    scrollThreshold={0.9}
    scrollableTarget={id}
    hasMore={vendorMediaData?.hasMoreReel}
    endMessage={
        <p style={{ textAlign: 'center',width:"100%" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
   {
    vendorMediaData?.reelData?.map((item,pos)=>
    <div key={pos} className=" relative h-[30vh]">
        <VideoPlayer PostUrl={item?.videos?.medium}/>
    </div>
    )
   }
    </InfiniteScroll>
    </>)
}
export {VendorReelGrid}