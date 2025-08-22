import React from 'react'
import StartupForm from "@/components/StartupForm";
import {auth} from "@/auth"
import {redirect} from "next/navigation";

const Page = async () => {
    const session = await auth();
    if (!session) {redirect('/')}
    return (
        <>
            <section className="primary-background !min-h-[230px]">
                <h1 className="heading">
                    Submit your startup
                </h1>
            </section >
                <StartupForm />
        </>
    )
}
export default Page
