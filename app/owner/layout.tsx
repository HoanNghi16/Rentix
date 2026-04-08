"use client";
import PrimarySidebar from "../components/layout/primarySidebar";
import PrimaryHeader from "../components/layout/primaryHeader";
import { useState } from "react";
export default function OwnerLayout({children}: Readonly<{children: React.ReactNode}>) {
    const [open, setOpen] = useState(false);
    const openNav = ()=>{
        setOpen(!open);
    }
    return (
        <div className="bg-white-500 h-screen w-screen flex">
            <PrimarySidebar open={open} openNav={openNav}></PrimarySidebar>
            <div className="w-full">
                <PrimaryHeader openNav={openNav}></PrimaryHeader>
                {children}
            </div>
        </div>
    );
}