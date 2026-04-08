'use client'
import { usePathname } from "next/navigation"
import { GoMultiSelect } from "react-icons/go";

export default function PrimaryHeader({openNav}: {openNav: ()=>void}){
    const pathName = usePathname();
    console.log("Current path:", pathName);
    let title = "Quản lý nhà trọ"
    switch (pathName) {
        case "/owner":
            title = "Khu nhà của bạn";
            break;
        case "/owner/rooms":
            title = "Quản lý phòng";
            break;
        default:
            title = "Quản lý khu nhà";
    }
    return (
        <header className="w-full bg-white mt-0 border-b-2 z-900 border-gray-300 h-[64px] flex items-center px-4 gap-2">
            <button id="openNavBtn" className="text-3xl" onClick={()=>openNav()}>
                <GoMultiSelect />
            </button>
            <h1 className="text-xl font-bold">{title}</h1>
        </header>
    )
}