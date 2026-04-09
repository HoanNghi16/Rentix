import FilterBox from "../filterBox";
import RoomCard from "./roomCard";

export default function RoomList(){
    const rooms = new Array(10).fill(0);
    return (
        <div className="flex flex-col gap-6 sm:px-16 px-4">
            <div className="bg-gray-900 text-white font-bold grid grid-cols-5 shadow-lg border border-gray-300 rounded-lg py-4 hidden sm:grid items-center">
                <p className="text-center">Mã phòng</p>
                <p className="text-center">Giá thuê</p>
                <p className="text-center">Thời hạn</p>
                <p className="text-center">Trạng thái</p>
                <p className="text-center">Quản lý</p>
            </div>
            {
                rooms.map((_, index) => (
                    <RoomCard key={index} />
                ))
            }
        </div>
    )
}