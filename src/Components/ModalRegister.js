import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "./Checkbox";

function ModalRegister() {
  return (
    <div className="fixed z-20 bg-[rgba(0,0,0,0.6)] flex justify-center items-center top-0 right-0 left-0 bottom-0">
      <div className="rounded-xl relative w-[500px] bg-white px-[24px] pb-[20px] pt-[10px]">
        <div className="absolute z-[99] top-[10px] hover:opacity-70 hover:cursor-pointer rounded-full right-[10px] flex items-center justify-center w-[28px] h-[28px] bg-[rgba(0,0,0,0.5)]">
          <FontAwesomeIcon
            className=""
            icon={faXmark}
          />
        </div>
        <h3 className="text-green-400 text-[20px] font-[600] text-center">
          Đăng ký
        </h3>
        <input
          className="mt-[10px] border rounded-md px-[8px] py-[6px] text-[rgba(0,0,0,0.8)] text-[20px] w-full"
          placeholder="Họ và tên"
        />
        <input
          className="mt-[10px] border rounded-md px-[8px] py-[6px] text-[rgba(0,0,0,0.8)] text-[20px] w-full"
          placeholder="email"
        />

        <input
          className="mt-[10px] border rounded-md px-[8px] py-[6px] text-[rgba(0,0,0,0.8)] text-[20px] w-full"
          placeholder="Mật khẩu"
        />
        <input
          className="mt-[10px] border rounded-md px-[8px] py-[6px] text-[rgba(0,0,0,0.8)] text-[20px] w-full"
          placeholder="Nhập lại mật khẩu"
        />
        <div className="flex items-center mt-[12px]">
          <Checkbox />
          <p className="text-[rgba(0,0,0,0.5)] text-[14px] ml-[4px]">
            Tôi đồng ý với các điều khoản được bên bán đưa ra.
          </p>
        </div>
        <div className="bg-green-400 mt-[20px] font-[600] text-shadow text-center rounded-md text-[22px]">
          Đăng ký
        </div>
      </div>
    </div>
  );
}

export default ModalRegister;
