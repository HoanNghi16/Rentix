export default function RoomCard(){
    return (
        <div className="flex flex-col hover:shadow-xl transition-shadow duration-300 sm:px-0 p-4 sm:grid grid-cols-5 items-center shadow-lg border border-gray-300 rounded-lg ">
            <p className="w-full flex sm:block sm:text-center  justify-between"><b className="sm:hidden">Mã phòng:</b><span className="text-center font-bold">101</span></p>
            <p className="w-full flex sm:block sm:text-center  justify-between"><b className="sm:hidden">Giá thuê:</b><span className="text-center text-red-600">5,000,000 đ</span></p>
            <p className="w-full flex sm:block sm:text-center  justify-between"><b className="sm:hidden">Thời hạn:</b><span className="text-center">--/--/----</span></p>
            <p className="w-full flex sm:block sm:text-center  justify-between"><b className="sm:hidden">Trạng thái:</b><span className="text-center">Trống</span></p>
            <div className="w-full sm:justify-center gap-2 mt-2 sm:mt-0 flex sm:flex sm:flex-row flex-wrap">
                <button className="w-full sm:w-auto bg-blue-400 text-white text-sm p-2 rounded-lg hover:bg-blue-600">Sửa</button>
                <button className="w-full sm:w-auto bg-red-600 text-white text-sm p-2 rounded-lg hover:bg-red-700">Xóa</button>
            </div>
        </div>
    )
}