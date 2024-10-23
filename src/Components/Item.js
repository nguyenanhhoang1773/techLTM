import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { StartIcon } from "../assets/icon";
import router from "../router";
import { useMediaQuery } from "react-responsive";

import "./Item.scss";
function Item({ id, title, sale, src, prevPrice, nextPrice, onClick }) {
  const isBigScreen = useMediaQuery({ minWidth: 1774 });
  const Laptop = useMediaQuery({ minWidth: 1644, maxWidth: 1773 });
  const miniLaptop = useMediaQuery({ minWidth: 1500, maxWidth: 1643 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1499 });

  return (
    <div className="inline-block text-[var(--text-primary)]  w-full  p-[10px]">
      {id === 23 && (
        <div
          onClick={onClick}
          className="bg-white block shadow-lg rounded-xl relative hover:cursor-pointer hover:border border-green-500 hover:translate-y-[-4px]"
        >
          <div className="absolute font-[600] text-shadow top-[16px] left-[-8px] bg-[var(--color-primary)] p-[4px] rounded-tr-full rounded-tl-[100px] rounded-br-full">
            Giảm {sale}%
            <div className="absolute top-[100%] left-0 border-[4px] border-[var(--color-primary)] border-b-transparent border-l-transparent "></div>
          </div>
          <img
            className="p-[10px] w-[284px]"
            src={src}
          />
          <div className="px-[16px] py-[6px]">
            <div className="h-[44px] overflow-hidden">
              <a className="text-[16px]   text-[rgba(0,0,0,0.9)]">{title}</a>
            </div>
            <div className="mt-[2px]">
              {isBigScreen && (
                <div className="flex">
                  <p className=" text-[18px] line-through text-[rgba(0,0,0,0.4)]">
                    {prevPrice}đ
                  </p>
                  <p className=" text-[23px] ml-[10px] text-green-500">
                    {nextPrice}đ
                  </p>
                </div>
              )}
              {Laptop && (
                <div className="flex">
                  <p className="text-[18px] line-through text-[rgba(0,0,0,0.4)]">
                    {prevPrice}đ
                  </p>
                  <p className="text-[22px] ml-[10px] text-green-500">
                    {nextPrice}đ
                  </p>
                </div>
              )}
              {miniLaptop && (
                <div className="flex">
                  <p className="text-[14px] line-through text-[rgba(0,0,0,0.4)]">
                    {prevPrice}đ
                  </p>
                  <p className="text-[20px] ml-[10px] text-green-500">
                    {nextPrice}đ
                  </p>
                </div>
              )}
              {isTabletOrMobile && (
                <div className="flex">
                  <p className="text-[12px] line-through text-[rgba(0,0,0,0.4)]">
                    {prevPrice}đ
                  </p>
                  <p className="text-[16px] ml-[10px] text-green-500">
                    {nextPrice}đ
                  </p>
                </div>
              )}
            </div>
            <div>
              <div className="inline-block mt-[4px] ">
                <StartIcon />
                <StartIcon />
                <StartIcon />
                <StartIcon />
                <StartIcon />
              </div>
              <span className="text-[14px] ml-[10px]">Đã bán 12,2k</span>
              <div className="text-primary text-end px-[10px]">
                <span className="mr-[8px]">Yêu thích</span>
                <span className="heart">
                  <FontAwesomeIcon
                    className="heart-prev text-[18px] text-[var(--color-primary)]"
                    icon={faHeart}
                  />
                  <FontAwesomeIcon
                    className="heart-next text-[18px] text-[var(--color-primary)]"
                    icon={faHeartSolid}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {id !== 23 && (
        <Link
          to={`/Detail/${id}`}
          className="bg-white block shadow-lg rounded-xl relative hover:cursor-pointer hover:border border-green-500 hover:translate-y-[-4px]"
        >
          <div className="absolute font-[600] text-shadow top-[16px] left-[-8px] bg-[var(--color-primary)] p-[4px] rounded-tr-full rounded-tl-[100px] rounded-br-full">
            Giảm {sale}%
            <div className="absolute top-[100%] left-0 border-[4px] border-[var(--color-primary)] border-b-transparent border-l-transparent "></div>
          </div>
          <img
            className="p-[10px] w-[284px]"
            src={src}
          />
          <div className="px-[16px] py-[6px]">
            <div className="h-[44px] overflow-hidden">
              <a className="text-[16px]   text-[rgba(0,0,0,0.9)]">{title}</a>
            </div>
            <div className="mt-[2px]">
              {isBigScreen && (
                <div className="flex justify-center items-center">
                  <p className="text-[18px] line-through text-[rgba(0,0,0,0.4)]">
                    {prevPrice}đ
                  </p>
                  <p className="text-[25px] ml-[10px] text-green-500">
                    {nextPrice}đ
                  </p>
                </div>
              )}
              {Laptop && (
                <div className="flex justify-center items-center">
                  <p className="text-[18px] line-through text-[rgba(0,0,0,0.4)]">
                    {prevPrice}đ
                  </p>
                  <p className="text-[22px] ml-[10px] text-green-500">
                    {nextPrice}đ
                  </p>
                </div>
              )}
              {miniLaptop && (
                <div className="flex justify-center items-center">
                  <p className="text-[14px] line-through text-[rgba(0,0,0,0.4)]">
                    {prevPrice}đ
                  </p>
                  <p className="text-[20px] ml-[10px] text-green-500">
                    {nextPrice}đ
                  </p>
                </div>
              )}
              {isTabletOrMobile && (
                <div className="flex justify-center items-center">
                  <p className="text-[12px] line-through text-[rgba(0,0,0,0.4)]">
                    {prevPrice}đ
                  </p>
                  <p className="text-[16px] ml-[10px] text-green-500">
                    {nextPrice}đ
                  </p>
                </div>
              )}
            </div>
            <div>
              <div className="inline-block mt-[4px] ">
                <StartIcon />
                <StartIcon />
                <StartIcon />
                <StartIcon />
                <StartIcon />
              </div>
              <span className="text-[14px] ml-[10px]">Đã bán 12,2k</span>
              <div className="text-primary text-end px-[10px]">
                <span className="mr-[8px]">Yêu thích</span>
                <span className="heart">
                  <FontAwesomeIcon
                    className="heart-prev text-[18px] text-[var(--color-primary)]"
                    icon={faHeart}
                  />
                  <FontAwesomeIcon
                    className="heart-next text-[18px] text-[var(--color-primary)]"
                    icon={faHeartSolid}
                  />
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Item;
