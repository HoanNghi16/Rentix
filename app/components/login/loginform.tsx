import Link from "next/link";
import { CiSearch } from "react-icons/ci";
export default function LoginForm() {
  //Nghi comment: sửa style padding
  return (
    <form className="w-112 h-128 bg-white p-6 bg-white rounded-2xl shadow-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center tracking-wide mb-10 pt-10">
        ĐĂNG NHẬP
      </h1>
      {/* gmail */}
      <div className="mb-4 mx-auto">
        <input
          type="text"
          name="email"
          id="txtEmail"
          placeholder="Nhập Email"
          className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-300 w-full "
        />
      </div>
      {/* password */}
      <div className="mb-5 mx-auto">
        <input
          type="password"
          name="password"
          id="txtPassword"
          placeholder="Nhập Mật khẩu"
          className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-300 w-full "
        />
      </div>
      {/* link to register */}
      <p>
        <Link href={"#"} className="text-red-900 hover:text-red-700 ml-1 mb-8">
          Quên mật khẩu?
        </Link>
      </p>

      {/* button login */}
      <button
        type="submit"
        className="  w-full bg-slate-500 hover:bg-slate-600 text-white text-lg shadow-md active:scale-95 transition py-2 px-4 rounded-md mt-6 mb-6"
      >
        Đăng nhập
      </button>

      {/* register */}
      <div className="flex items-center gap-2 mb-0 mx-auto pt-6">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-sm text-gray-500">
          Bạn chưa có tài khoản?
          <Link href={""} className="text-red-900 hover:text-red-700 ml-2">
            Đăng ký ngay
          </Link>
        </span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
    </form>
  );
}
