import Link from "next/link";

export default function FeatureCard({feature}: {feature: {name: string, icon: React.ReactNode, href: string}}) {
    return (
        <Link href={feature.href} className="flex flex-col items-center w-32 border-1 shadow-lg border-gray-300 rounded-lg py-2 text-center hover:bg-gray-100">
            {feature.icon}
            <span className="w-full text-lg font-semibold pt-2 border-t border-gray-300">{feature.name}</span>
        </Link>
    )
}