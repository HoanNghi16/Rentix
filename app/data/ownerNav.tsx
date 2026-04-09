import { GoArchive, GoHome, GoOrganization, GoPasskeyFill, GoPeople, GoPerson, GoReport, GoSignOut } from "react-icons/go";

export const ownerNav = [
    { name: "Khu nhà", href: "/owner", icon: <GoOrganization className="text-2xl"/> },
    { name: "Phòng thuê", href: "/owner/rooms" , icon:<GoHome className="text-2xl"/>},
    { name: "Nhân sự", href: "/owner/staff" , icon:<GoPasskeyFill className="text-2xl"/>},
    { name: "Khách thuê", href: "/owner/tenants" , icon:<GoPeople className="text-2xl"/>},
    { name: "Thiết bị", href: "/owner/properties" , icon:<GoArchive className="text-2xl"/>},
    { name: "Khiếu nại", href: "/owner/reports" , icon:<GoReport className="text-2xl"/>},
    {name: "Hồ sơ", href:"/profile", icon:<GoPerson className="text-2xl"/>},
    { name: "Đăng xuất", href: "/owner/logout" , icon:<GoSignOut className="text-2xl"/>}
];