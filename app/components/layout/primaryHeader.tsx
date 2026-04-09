'use client'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import { GoMultiSelect } from "react-icons/go";

export default function PrimaryHeader({openNav}: {openNav: ()=>void}){
    const pathName = usePathname();
    const [title, setTitle] = useState("");
    useEffect(()=>{
        const getTitle = ()=>{
            switch (pathName) {
                case "/owner":
                    setTitle("Khu nhà của bạn");
                    break;
                case "/owner/rooms":
                    setTitle("Quản lý phòng thuê");
                    break;
                case "/owner/staff":
                    setTitle("Quản lý nhân sự");
                    break;
                case "/owner/tenants":
                    setTitle("Quản lý khách thuê");
                    break;
                case "/owner/properties":
                    setTitle("Quản lý thiết bị");
                    break;
                default:
                    setTitle("Quản lý khu nhà");
                }
        }
        getTitle();
    },[pathName])

    return (
        <header className="w-full bg-white mt-0 border-b-2 z-900 border-gray-300 h-[64px] flex items-center px-4 gap-2">
            <button id="openNavBtn" className="text-3xl" onClick={()=>openNav()}>
                <GoMultiSelect />
            </button>
            <h1 className="text-xl font-bold">{title}</h1>
        </header>
    )
}