import React from 'react'
import {formatDate} from "@/lib/utils";
import {EyeIcon} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Author, Startup} from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & {author?: Author}

const StartupCard = ({post} : {post: StartupTypeCard}  ) => {
    const {_createdAt, views, author, title, description, _id, category, image} = post;
    return (
        <li className="startup-card group">
            <div className={"flex-between"}>
                <p className="startup_card_date">
                    {formatDate(_createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary-600"/>
                    <span className="text-16-medium">{views || 0}</span>
                </div>
            </div>
            <div className={"flex-between mt-5 gap-5"}>
                <div className={"flex-1"}>
                    <Link href={`/users/${author?._id}`}>
                        <p className={"text-16-medium line-clamp-1"}>
                            {author?.name}
                        </p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <p className={"text-26-semibold line-clamp-1"}>
                            {title}
                        </p>
                    </Link>
                </div>
                <Link href={`/users/${author?._id}`}>
                    <Image src={`${post.author?.image}`} alt="placeholder" width={48} height={48} className="rounded-full"/>
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className={"startup-card_desc"}>
                    {description}
                </p>
            </Link>
            <img src={image} alt="placeholder" className="startup-card_img" />
            <div className={"flex-between mt-5 gap-3"}>
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className={"text-16-medium"}>{category}</p>
                </Link>
                <Button className="startup-card_btn">
                    <Link href={`/startup/${_id}`}>
                        <p className={"text-14-normal"}>
                            Details
                        </p>
                    </Link>
                </Button>
            </div>
        </li>
    )
}
export default StartupCard
