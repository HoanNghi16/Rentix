export default function FilterBox(){
    return (
        <div className="flex gap-4 flex-wrap">
                <select className="p-2 border rounded-lg" name="" id="">
                    <option value="" defaultChecked>--Chọn khu nhà--</option>
                    <option value="">Tất cả</option>
                    <option value="">Phòng trọ</option>
                    <option value="">Căn hộ</option>
                    <option value="">Nhà nguyên căn</option>
                </select>
                <select className="p-2 border rounded-lg" name="roomType" id="roomType">
                    <option value="" defaultChecked>--Chọn trạng thái--</option>
                    <option value="">Tất cả</option>
                    <option value="available">Còn trống</option>
                    <option value="occupied">Đã cho thuê</option>
                </select>
                <select className="p-2 border rounded-lg" name="" id="">
                    <option value="" defaultChecked>--Sắp xếp theo--</option>
                    <option value="">Giá thuê tăng dần</option>
                    <option value="">Giá thuê giảm dần</option>
                    <option value="">Thời hạn tăng dần</option>
                    <option value="">Thời hạn giảm dần</option>
                </select>
                <button className="p-2 px-4 bg-gradient-to-bl from-blue-600 to-purple-900 hover:from-blue-700 to-purple-950 text-white rounded-lg">Áp dụng</button>
                <button className="p-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg">Đặt lại</button>
        </div>
    )
}