import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth, signIn, signOut} from "@/auth";
import {CirclePlus, LogOut} from "lucide-react";

const NavBar = async () => {
    const session = await auth();
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/blog_it.png" alt="blog_it" width={100} height={30} style={{objectFit: 'scale-down'}}/>
                </Link>
                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                            <>
                                <Link href="/startup/create">
                                    <div className="flex items-center justify-center gap-1 p-2 rounded-full font-semibold hover:bg-primary-100 hover:text-primary-600">
                                        <CirclePlus/>
                                        Create
                                    </div>
                                </Link>
                                <form action={async () => {
                                    "use server"
                                    await signOut()
                                }}>
                                    <button type="submit" style={{cursor: 'pointer'}}
                                            className="flex items-center justify-center gap-1 p-2 rounded-full font-semibold text-alizarin-crimson hover:bg-alizarin-crimson-50 hover:text-alizarin-crimson-900">
                                        <LogOut/>
                                        Logout
                                    </button>
                                </form>
                                <Link href={`/user/${session?.id}`}>
                                    <div className="flex items-center justify-center gap-3 p-2 font-semibold hover:text-primary-600">
                                        {session?.user?.name}
                                        <Image src={`${session?.user?.image}`} alt="placeholder" width={30} height={30} className="rounded-full"/>

                                    </div>
                                </Link>
                            </>
                        ) :
                        (
                            <>
                                <form action={async () => {
                                    "use server"
                                    await signIn('github')
                                }}>
                                    <button type="submit" style={{cursor: 'pointer'}}>
                                        Login
                                    </button>
                                </form>
                            </>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}
export default NavBar
