import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalLogin() {
  return (
    <div className="fixed z-20 bg-[rgba(0,0,0,0.6)] flex justify-center items-center top-0 right-0 left-0 bottom-0">
      <div className="rounded-xl relative w-[500px] bg-white px-[24px] py-[10px]">
        <div className="absolute z-[99] top-[10px] hover:opacity-70 hover:cursor-pointer rounded-full right-[10px] flex items-center justify-center w-[28px] h-[28px] bg-[rgba(0,0,0,0.5)]">
          <FontAwesomeIcon className="" icon={faXmark} />
        </div>
        <h3 className="text-green-400 text-[20px] font-[600] text-center">
          Đăng nhập
        </h3>
        <input
          className="mt-[10px] border rounded-md px-[4px] py-[6px] text-[rgba(0,0,0,0.8)] text-[20px] w-full"
          placeholder="Tài khoản"
        />
        <input
          className="mt-[10px] border rounded-md px-[4px] py-[6px] text-[rgba(0,0,0,0.8)] text-[20px] w-full"
          placeholder="Mật khẩu"
        />
        <div className="bg-green-400 mt-[28px] font-[600] text-shadow text-center rounded-md text-[22px]">
          Đăng nhập
        </div>
        <div className="mt-[14px] text-center">
          <span className="text-[18px]  text-[rgba(0,0,0,0.5)] ">
            Bạn chưa có tài khoản?
          </span>
          <span className="text-[18px]  text-green-400 ml-[8px]">
            Đăng ký ngay
          </span>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
