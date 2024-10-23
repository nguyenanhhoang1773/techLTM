import { Header } from "../Components";
import Container from "../Components/Container";
import ScrollBar from "../../Components/Scrollbar.tsx";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
function DefaultLayout({ children }) {
  const param = useLocation();
  const startEle = useRef();
  const [height, setHeight] = useState(window.innerHeight);
  const show = useMediaQuery({ minWidth: 1224 });
  useEffect(() => {
    if (show) {
      startEle.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [param.pathname]);
  useEffect(() => {
    window.onresize = () => {
      setHeight(window.innerHeight);
    };
  }, []);
  return (
    <div className="block">
      {show ? (
        <ScrollBar
          heightContent={height}
          heightBar={140}
          colorBar="rgb(74 222 128)"
        >
          <div className="bg-[#9fdfb8a6]">
            <div ref={startEle}></div>
            <Header />
            <Container>{children}</Container>
          </div>
        </ScrollBar>
      ) : (
        <div className="fixed bg-slate-700 flex justify-center items-center top-0 right-0 left-0 bottom-0">
          <p className="text-[28px] text-red-500">
            Trang web chưa được áp dụng cho thiết bị của bạn!!
          </p>
        </div>
      )}
    </div>
  );
}

export default DefaultLayout;
