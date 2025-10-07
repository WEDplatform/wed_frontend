'use client'
import anime from "animejs";
import { useRef, useState } from "react";

const VendorSideBar = () => {
  const sideBarRef = useRef(null);
  const buttonRef = useRef(null)
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    const sideBarCurrent = sideBarRef.current;
    const buttonCurrent = buttonRef.current;
    if (!sideBarCurrent) return;
    if (!isCollapsed) {
      // 🔹 Collapse (hide)
      anime({
        targets: [sideBarCurrent,buttonCurrent],
        translateX: "-25vw",
        duration: 500,
        easing: "easeInOutQuad",
        complete: () => {
          sideBarCurrent.style.display = "none"; // <-- hide after animation
        },
      });
    } else {
      // 🔹 Expand (show)
      sideBarCurrent.style.display = "block"; // <-- show before animation
      anime({
        targets: [sideBarCurrent,buttonCurrent],
        translateX: "0vw",
        duration: 500,
        easing: "easeInOutQuad",
      });
    }
    setIsCollapsed((prev) => !prev);
  };

  return (
    <>
    <div
      ref={sideBarRef}
      className="bg-red-200 w-[25vw] h-[100vh] fixed top-0  left-0"
    >
      <p>Hey</p>
    </div>
    <button ref={buttonRef} className="fixed top-0 left-[25vw]" onClick={handleCollapse}>Close</button>
    </>
  );
};

export { VendorSideBar };
