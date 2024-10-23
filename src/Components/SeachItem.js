import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SearchItem({ id, title, src, prevPrice, nextPrice }) {
  return (
    <Link
      to={`/Detail/${id}`}
      className="flex hover:bg-[#e5e0e0] border-b-[2px] rounded-b-sm border-green-400 p-[10px]"
    >
      <div className="flex flex-1">
        <img className="w-[80px]" src={src} />
        <div className="flex flex-col ml-[10px]">
          <h3 className="text-black mt-[2px]">{title}</h3>
          <div>
            <span className="text-[20px] text-green-500">{prevPrice}đ</span>
            <span className="text-[rgba(0,0,0,0.5)] line-through ml-[8px] text-[16px]">
              {nextPrice}đ
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center ">
        <div className="heart">
          <FontAwesomeIcon
            className="heart-prev text-[32px] text-green-500"
            icon={faHeart}
          />
          <FontAwesomeIcon
            className="heart-next text-[32px] text-green-500"
            icon={faHeartSolid}
          />
        </div>
      </div>
    </Link>
  );
}

export default SearchItem;
