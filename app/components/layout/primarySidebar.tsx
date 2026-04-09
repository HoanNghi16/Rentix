import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoMultiSelect } from "react-icons/go";

export default function PrimarySidebar({open, openNav, navData}: {open: boolean, openNav: ()=>void, navData: Array<{name: string, href: string, icon: React.ReactNode}>}) {
    const pathName = usePathname();
    let root = '';
    if (pathName.startsWith("/owner")){
        root = "/owner";
    }else if (pathName.startsWith("/tenant")){
        root = "/tenant";
    }else{
        root = "/manager";
    }
    return (
        <aside className={`w-64 fixed bg-gray-50 py-5 border-r-2 border-gray-300 h-screen ${open ? 'open' : ''}`} id="primarySidebar">
            <div className="flex items-center justify-between p-4">
                <Link href={root} className="flex gap-1">
                    <Image src='/rentix_logo.png' className="" height={40} width={40} loading="lazy" alt="Rentix Logo" />
                    <span className="text-4xl text-gray-700 font-semibold">Rentix</span>
                </Link>
                <button id="openNavBtn" className="flex z-10" onClick={()=>openNav()}>
                    <GoMultiSelect className="text-3xl text-black" />
                </button>
            </div>
            
            <nav className="text-black">
                <ul>
                    {
                        navData && navData.map((item) => (
                            <li key={item?.href}>
                                <Link className={`block py-3 px-6 hover:bg-gray-200 flex items-center gap-2 ${item.href == pathName && 'bg-gray-200'}`} href={item?.href}>{item?.icon}{item?.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    )
}