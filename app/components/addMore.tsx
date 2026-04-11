"use client"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function AddMore(){
    const pathName = usePathname()
    const [title, setTitle] = useState("")
    useEffect(()=>{
        function getTitle(){
            switch (pathName){
                case "/owner":
                    setTitle("Thêm tòa nhà..");
                    break;
                case "/owner/staff":
                    setTitle("Thêm quản lý..");
                    break;
                case "/owner/tenants":
                    setTitle("Thêm khách thuê..");
                    break;
                default:
                    setTitle("Thêm");
            }
        }
        getTitle()
    },[pathName])
    return(
        <div className="w-full items-center mt-4" style={{textAlign: 'center'}}>
            <button className="w-16 h-16 rounded-full justify-center font-bold-500 text-5xl bg-blue-200 shadow-sm hover:bg-blue-300 hover:shadow-lg">
                <h3>+</h3>
            </button>
            <p className="mt-4 opacity-70">{title}</p>
        </div>
    )
}