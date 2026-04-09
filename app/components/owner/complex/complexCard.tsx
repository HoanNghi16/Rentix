import Link from "next/link";
import { GoOrganization } from "react-icons/go";

export default function ComplexCard(){
    return (
        <Link href="/owner/1" className="shadow-lg border border-gray-300 mt-4 pb-2 rounded-md hover:shadow-2xl transition-shadow duration-300">
            <div className="border-b border-gray-300 flex p-2">
                <span className="text-xs"><span className="text-gray-500">ID:</span> ascaskc âcsc</span>
            </div>
            <div className="p-4 gap-2">
                <h2 className="text-lg font-semibold flex items-center gap-2"><GoOrganization className="text-3xl"/>Nhà 1</h2>
                <p><b>Địa chỉ:</b> 123 Đường ABC, Quận XYZ</p>
                <p><b>Tổng số phòng:</b> 20</p>
                <p><b>Số phòng trống:</b> 10</p>
                <p><b>Số người thuê:</b> 110</p>
            </div>
        </Link>
    )
}