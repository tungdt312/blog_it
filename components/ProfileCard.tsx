import React from 'react'
import {Author} from "@/sanity/types";
import Image from "next/image";

export type User = Omit<Author, "id" | "email">

const ProfileCard = ({user}: { user: User }) => {
    const {name, username, bio, image} = user;
    return (
        <div className={"profile_card"}>
            <span className={"profile_title text-30-bold text-center uppercase line-clamp-1"}>{name}</span>
            <Image src={`${image}`} alt="placeholder" width={400} height={400} className="profile_image"/>
            <span className={"text-26-semibold text-white text-center"}>@{username}</span>
            {bio && <span className={"text-26-semibold text-center"}>{bio}</span>}
        </div>
    )
}
export default ProfileCard
