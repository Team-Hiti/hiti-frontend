// import React, { useRef, useEffect } from 'react';
// import './Tradwater.css';

// function TradWater() {

//   return (
//       <div class='s'>
//         <img src="/tika/1.png" alt="Image 1" className="wt" />
//         <img src="/tika/2.png" alt="Image 2" className="wt" />
//         <img src="/tika/3.png" alt="Image 3" className="wt" />
//         <img src="/tika/4.png" alt="Image 4" className="wt" />
//         <img src="/tika/5.png" alt="Image 5" className="wt" />
//         <img src="/tika/6.png" alt="Image 6" className="wt" />
//         <img src="/tika/7.png" alt="Image 7" className="wt" />
//       </div>
//   );
// }

// export default TradWater;
import React, { useRef, useState } from "react";
import "./TradWater.css";

function TradWater() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollToNextImage = () => {
    if (containerRef.current) {
      const nextIndex =
        (currentIndex + 1) % containerRef.current.children.length;
      const nextImage = containerRef.current.children[nextIndex];
      nextImage.scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <div>
      <div className="s" ref={containerRef}>
        <img src="/tika/1.png" alt="Image 1" className="wt" />
        <img src="/tika/2.png" alt="Image 2" className="wt" />
        <img src="/tika/3.png" alt="Image 3" className="wt" />
        <img src="/tika/4.png" alt="Image 4" className="wt" />
        <img src="/tika/5.png" alt="Image 5" className="wt" />
        <img src="/tika/6.png" alt="Image 6" className="wt" />
        <img src="/tika/7.png" alt="Image 7" className="wt" />
      </div>
      <button className="scroll-button" onClick={handleScrollToNextImage}>
        Follow the stream{" "}
      </button>
    </div>
  );
}

export default TradWater;
