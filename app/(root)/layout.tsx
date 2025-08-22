import React from "react";
import NavBar from "@/components/NavBar";
import {Toaster} from "react-hot-toast";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="font-work-sans">
            <NavBar />
            {children}
            <Toaster position="top-center" />
        </main>
    )
}