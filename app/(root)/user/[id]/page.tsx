import React from 'react'
import ProfileCard, { User } from "@/components/ProfileCard";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import {client} from "@/sanity/lib/client";
import {STARTUPS_QUERY_BY_AUTHOR, USER_BY_ID} from "@/sanity/lib/queries";


const Page = async ({params} : {params: {id: string}}) => {
    const {id} = params;
    const [user, posts] = await Promise.all([
        client.fetch(USER_BY_ID, {id}),
        client.fetch(STARTUPS_QUERY_BY_AUTHOR, {id})
    ])
    return (
        <section className="profile_container">
            <ProfileCard user={user as User} />
            <div className="section_container">
                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupTypeCard ) => (
                                <StartupCard key={post?._id} post={post}/>
                            )
                        )):(
                        <p className="no-result"> No startups found</p>
                    )}
                </ul>
            </div>
        </section>
    )
}
export default Page
