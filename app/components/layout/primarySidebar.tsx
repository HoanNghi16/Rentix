import Image from "next/image";
import Link from "next/link";
import { GoArchive, GoHome, GoMultiSelect, GoPasskeyFill, GoPeople, GoReport, GoSignOut } from "react-icons/go";

export default function PrimarySidebar({open, openNav}: {open: boolean, openNav: ()=>void}){
    return (
        <aside className={`w-64 bg-gray-100 z-1000 top-0 left-0 py-5 border-r-2 border-gray-300 h-screen ${open ? 'open' : ''}`} id="primarySidebar">
            <div className="flex items-center justify-between p-4">
                <Link href="/" className="flex gap-1">
                    <Image src='/rentix_logo.png' className="" height={40} width={40} loading="lazy" alt="Rentix Logo" />
                    <span className="text-4xl text-gray-700 font-semibold">Rentix</span>
                </Link>
                <button id="openNavBtn" className="flex z-10" onClick={()=>openNav()}>
                    <GoMultiSelect className="text-3xl text-black" />
                </button>
            </div>
            
            <nav className="text-black">
                <ul>
                    <li><Link href="/owner/dashboard" className="block py-3 px-6 hover:bg-gray-200 flex items-center gap-2"><GoHome className="text-2xl"/>Phòng thuê</Link></li>
                    <li><Link href="/owner/dashboard" className="block py-3 px-6 hover:bg-gray-200 flex items-center gap-2"><GoPasskeyFill className="text-2xl"/>Nhân sự</Link></li>
                    <li><Link href="/owner/dashboard" className="block py-3 px-6 hover:bg-gray-200 flex items-center gap-2"><GoPeople className="text-2xl"/> Khách thuê</Link></li>
                    <li><Link href="/owner/properties" className="block py-3 px-6 hover:bg-gray-200 flex items-center gap-2"><GoArchive className="text-2xl"/>Thiết bị</Link></li>
                    <li><Link href="/owner/tenants" className="block py-3 px-6 hover:bg-gray-200 flex items-center gap-2"><GoReport className="text-2xl"/> Khiếu nại</Link></li>
                    <li><Link href="/owner/reports" className="block py-3 px-6 hover:bg-gray-200 flex items-center gap-2"><GoSignOut className="text-2xl"/> Đăng xuất</Link></li>
                </ul>
            </nav>
        </aside>
    )
}