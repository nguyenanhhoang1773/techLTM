import { useMediaQuery } from "react-responsive";

function Container({ children }) {
  const isBigScreen = useMediaQuery({ minWidth: 1884 });
  const miniLaptop = useMediaQuery({ minWidth: 1225, maxWidth: 1883 });
  const isTabletOrMobile = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
  return (
    <>
      {isBigScreen && (
        <div className="mx-[200px] pt-[150px] pb-[40px]">{children}</div>
      )}
      {miniLaptop && (
        <div className="mx-[130px] pt-[150px] pb-[40px]">{children}</div>
      )}
      {isTabletOrMobile && (
        <div className="mx-[40px] pt-[150px] pb-[40px]">{children}</div>
      )}
    </>
  );
}

export default Container;
