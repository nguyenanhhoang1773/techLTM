import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { removeProduct } from "../features/CartManage";
import axios from "axios";

function CartItem({ id, title, src, prevPrice, nextPrice, sale }) {
  const dispatch = useDispatch();
  const handleDeleteCart = () => {
    dispatch(removeProduct(id));
    axios
      .get(`http://localhost:3001/deleteCart/${id}`)
      .then(function (response) {
        // xử trí khi thành công
        console.log(response);
      })
      .catch(function (error) {
        // xử trí khi bị lỗi
        console.log(error);
      })
      .finally(function () {
        // luôn luôn được thực thi
      });
  };
  return (
    <div className="flex mt-[12px]  border-l-[2px]  border-r-[2px]  border-green-500 bg-white rounded-md">
      <img
        className="w-[160px] pl-[10px] py-[4px] rounded-md"
        src={src}
      />
      <div className="ml-[12px]  py-[12px]">
        <h3 className="text-[rgba(0,0,0,0.8)] mb-[10px] font-[600] text-[22px]">
          {title}
        </h3>
        <span className="text-green-500 text-[24px]">{nextPrice}đ</span>
        <span className="text-[rgba(0,0,0,0.5)] ml-[8px] line-through">
          {prevPrice}đ
        </span>
        <span className="ml-[8px] bg-green-400 rounded-xl p-[4px] text-white font-[600] text-shadow">
          Giảm {sale}%
        </span>
      </div>
      <div className="flex-1 flex justify-end pr-[30px] items-center">
        <FontAwesomeIcon
          className="text-green-400 hover:cursor-pointer hover:text-green-300 text-[40px]"
          onClick={handleDeleteCart}
          icon={faTrash}
        />
      </div>
    </div>
  );
}

export default CartItem;
