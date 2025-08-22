import React from 'react'
import {client} from "@/sanity/lib/client";
import {VIEWS_BY_ID} from "@/sanity/lib/queries";
import {writeClient} from "@/sanity/lib/write-client";
import {after} from "next/server";

const View = async ({id}: { id: string }) => {

    after(async () =>
        await writeClient
            .patch(id)
            .setIfMissing({views: 0})
            .inc({views: 1})
            .commit()
    )

    const {views} = await client
        .withConfig({useCdn: false})
        .fetch(VIEWS_BY_ID, {id});

    return (
        <div className={"view-container"}>
            <div className={"absolute -top-2 -right-2"}>
                <div className={"absolute -left-4 top-1"}>
                    <span className={"absolute size-[11px] rounded-full bg-alizarin-crimson opacity-75 animate-ping"}/>
                    <span className={"absolute size-[11px] rounded-full bg-alizarin-crimson opacity-75"}/>
                </div>

            </div>
            <p className={"view-text"}>
                <span className={"font-black"}>
                    {views} {views > 1 ? "views" : "view"}
                </span>
            </p>
        </div>
    )
}
export default View
