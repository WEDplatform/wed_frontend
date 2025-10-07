'use client'
import anime from "animejs";
import { useRef, useState } from "react";
import { ProfilePicture } from "../../commonComponent/ProfilePicture";

const VendorSideBar = () => {
  const sideBarRef = useRef(null);
  const buttonRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const vendorSocialURL = [{
    type:"Instagram",
    url:"http://localhost:3000/home/user?tab=home"
  },{
    type:"Facebook",
    url:"http://localhost:3000/home/user?tab=home"
  },{
    type:"Twitter",
    url:"http://localhost:3000/home/user?tab=home"
  },{
    type:"Website",
    url:"http://localhost:3000/home/user?tab=home"
  }]
  const handleCollapse = () => {
    const sideBarCurrent = sideBarRef.current;
    const buttonCurrent = buttonRef.current;
    if (!sideBarCurrent || !buttonCurrent) return;

    if (!isCollapsed) {
      // 🔹 Collapse (hide)
      anime({
        targets: [sideBarCurrent, buttonCurrent],
        translateX: "-25vw",
        duration: 500,
        easing: "easeInOutQuad",
        complete: () => {
          // Just disable clicks, do NOT change display/flex
          sideBarCurrent.style.pointerEvents = "none";
        },
      });
    } else {
      // 🔹 Expand (show)
      sideBarCurrent.style.pointerEvents = "auto";
      anime({
        targets: [sideBarCurrent, buttonCurrent],
        translateX: "0vw",
        duration: 500,
        easing: "easeInOutQuad",
      });
    }

    setIsCollapsed((prev) => !prev);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        ref={sideBarRef}
        className="w-[25vw] bg-red-200 h-[100vh] fixed top-0 left-0 flex flex-col items-center justify-center"
      >
        <div className="w-full flex flex-col items-center">
          <div className="w-[10vw] h-[10vw] bg-white-200 relative mt-3 rounded-full">
            <ProfilePicture />
          </div>
          <button className="w-[90%] py-2 mt-2 bg-[#9A2143] rounded-md font-semibold text-white">
            Messages
          </button>
        </div>
        <div className="w-[100%]">
            
        </div>
      </div>

      {/* Toggle Button */}
      <button
        ref={buttonRef}
        onClick={handleCollapse}
        className="fixed top-4 left-[25vw] bg-[#9A2143] text-white px-3 py-1 rounded-md shadow-md hover:bg-[#7d1a36] transition"
      >
        {isCollapsed ? "Open" : "Close"}
      </button>
    </>
  );
};

export { VendorSideBar };
