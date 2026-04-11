import Image from "next/image";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { showName } from "../lib/showName";

export default function UserCard({user}: {user: {name: string, email: string, avatar: string, phone: string}}){
    console.log(user?.avatar)
    return (
        <Link href="" className="flex w-54 flex-col items-center shadow-sm gap-2 p-2 border rounded-2xl hover:shadow-md transition-shadow-xl">
            <div className="flex items-center gap-4">
                {user?.avatar && (
                    <Image height={60} width={60} src={user.avatar} alt={user.name} />
                ) ||<GoPerson className="text-black rounded-full border-2" size={60} />}
                <h3 className="text-xl font-bold">{showName(user.name)}</h3>
            </div>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
        </Link>
    )
}