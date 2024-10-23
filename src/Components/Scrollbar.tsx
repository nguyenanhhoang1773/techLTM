import React, { useEffect, useRef, useState } from "react";
interface props {
  children: React.ReactNode;
  heightContent?: number;
  heightBar?: number;
  colorBar?: string;
  colorWrapperBar?: string;
}
function ScrollBar({
  children,
  heightBar = 80,
  heightContent = 300,
  colorBar = "rgba(109, 99, 104, 0.8)",
  colorWrapperBar = "transparent",
}: props) {
  const [mousePress, setMousePress] = useState(false);
  const [YMouseDown, setYMouseDown] = useState(0);
  const contentRef: any = useRef();
  const ScrollRef: any = useRef();
  const wrapperBarRef: any = useRef();
  useEffect(() => {
    // Style for elements
    contentRef.current.style.height = heightContent + "px";
    wrapperBarRef.current.style.height = heightContent + "px";
    ScrollRef.current.style.height = heightBar + "px";
    ScrollRef.current.style.transform = "translateY(" + 0 + "px)";
    ScrollRef.current.style.background = colorBar;
    wrapperBarRef.current.style.background = colorWrapperBar;
  }, []);
  useEffect(() => {
    if (mousePress) {
      const r = /\d+/;
      const prevTrans = +ScrollRef.current.style.transform.match(r)[0];
      document.body.style.userSelect = "none";
      window.onmousemove = (e) => {
        const YIncrease = e.clientY - YMouseDown;
        const newY = prevTrans + YIncrease;
        if (
          YIncrease != e.clientY &&
          newY < heightContent - heightBar &&
          newY > 0
        ) {
          ScrollRef.current.style.transform = "translateY(" + newY + "px)";
        } else if (newY >= heightContent - heightBar) {
          ScrollRef.current.style.transform =
            "translateY(" + (heightContent - heightBar) + "px)";
        } else if (newY <= 0) {
          ScrollRef.current.style.transform = "translateY(" + 0 + "px)";
        }
        contentRef.current.scrollTop =
          (newY / (heightContent - heightBar)) *
          (contentRef.current.scrollHeight - heightContent);
      };
      window.onmouseup = (e) => {
        setMousePress(false);
        window.onmousemove = null;
      };
    } else {
      document.body.style.userSelect = "unset";
    }
    return () => {
      window.onmousemove = null;
      window.onmouseup = null;
    };
  }, [mousePress, YMouseDown]);

  const handleScroll = (e: any): void => {
    const scrollheight: number = e.target.scrollHeight;
    const widthScroll: number =
      (e.target.scrollTop / (scrollheight - heightContent)) *
      (heightContent - heightBar);
    ScrollRef.current.style.transform =
      "translateY(" + Math.floor(widthScroll) + "px)";
  };
  const handleClick = (e: any): void => {
    if (e.target.matches(".wrapperBarRef")) {
      const r = /\d+/;
      const prevTrans = +ScrollRef.current.style.transform.match(r)[0];
      const { top } = ScrollRef.current.getBoundingClientRect();
      const num: number = e.clientY - top;
      let total = prevTrans + num - heightBar / 2;
      if (total > heightContent - heightBar) {
        total = heightContent - heightBar;
      } else if (total < 0) {
        total = 0;
      }
      ScrollRef.current.style.transform = "translateY(" + total + "px)";

      contentRef.current.scrollTop =
        (total / (heightContent - heightBar)) *
        (contentRef.current.scrollHeight - heightContent);
    }
  };
  return (
    <div className="relative">
      <div onScroll={handleScroll} ref={contentRef} className={`overflow-auto`}>
        {children}
      </div>
      <div
        onClick={handleClick}
        ref={wrapperBarRef}
        className={`wrapperBarRef absolute rounded-lg right-0 top-0 bg-white  w-[4px] `}
      ></div>
      <div
        onMouseDown={(e) => {
          setMousePress(true);
          setYMouseDown(e.clientY);
        }}
        ref={ScrollRef}
        className="absolute z-[999]  rounded-lg  w-[4px]  right-0 top-0"
      ></div>
    </div>
  );
}

export default ScrollBar;
