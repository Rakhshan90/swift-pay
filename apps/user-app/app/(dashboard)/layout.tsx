import { ArrowLeftRight, Clock3, House } from "lucide-react";
import Link from "next/link";


const navigations = [
    {
        icon: <House className="text-slate-500 group-hover:text-violet-600" />,
        name: "Dashboard",
        path: "/dashboard"
    },
    {
        icon: <ArrowLeftRight className="text-slate-500 group-hover:text-violet-600" />,
        name: "Transfer",
        path: "/transfer"
    },
    {
        icon: <Clock3 className="text-slate-500 group-hover:text-violet-600" />,
        name: "Transactions",
        path: "/transactions"
    }
]


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            {/* sidebar item */}
            <div className="w-72 min-h-screen pt-28 px-8 border-r-2 border-slate-200">
                <div className="flex flex-col gap-4 justify-start">
                    {navigations?.map((item, index) => (
                        <Link href={item?.path} key={index} className="flex gap-2 group">
                            {item?.icon}
                            <div className="font-bold text-slate-500 group-hover:text-violet-600">{item?.name}</div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* render children item */}
            {children}
        </div>
    )
}