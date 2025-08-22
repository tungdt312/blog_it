import React, {Suspense} from 'react'
import {STARTUP_DETAILS_BY_ID} from "@/sanity/lib/queries";
import {client} from "@/sanity/lib/client";
import {notFound} from "next/navigation";
import {formatDate} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import markdownit from 'markdown-it';
import {Skeleton} from "@/components/ui/skeleton";
import View from "@/components/view";

export const experimental_ppr = true

const md = markdownit();
const Page = async ({params} : {params: Promise<{id: string}>}) => {
    const id = (await params).id;

    const  post = await client.fetch(STARTUP_DETAILS_BY_ID,{id})
    if (!post) {notFound()}
    const parsedPost = md.render(post?.pitch || "");
    return (
        <>
            <section className="primary-background">
                <p className={"tag-tri"}> {formatDate(post._createdAt)}</p>
                <h1 className="heading">
                    {post.title}
                </h1>
                <p className="sub-heading">
                    {post.description}
                </p>
            </section >
            <section className={"section-container"}>
                <img src={post.image} alt="thumbnail" className={"w-4xl h-auto rounded-xl mx-auto"} />
                <div className={"space-y-5 mt-10 max-w-4xl mx-auto"} >
                    <div className={"flex-between gap-5"}>
                        <Link href={`/user/${post.author._id}`} className={"flex gap-2 items-center mb-3"}>
                            <Image src={post.author?.image} alt="avatar" className={"rounded-full drop-shadow-lg"} width={64} height={64} />
                            <div>
                                <p className={"text-20-medium"}>{post.author?.name}</p>
                                <p className={"text-16-medium !text-black-100"}>@{post.author?.username}</p>
                            </div>
                        </Link>
                        <p className={"category-tag"}>{post.category}</p>
                    </div>
                    <h3 className={"text-30-bold"}>Pitch Details</h3>
                    {parsedPost ? (
                        <article className={"prose max-w-4xl font-work-sans break-all"}
                        dangerouslySetInnerHTML={{ __html: parsedPost }}/>
                        ) :
                        ( <p className={"no-result"}>
                            No Pitch Details
                        </p>
                    )}
                </div>
                <hr className={"divider"}/>
                <Suspense fallback={<Skeleton className={"view_skeleton"} />}>
                    <View id={id}/>
                </Suspense>
            </section>
        </>
    )
}
export default Page
