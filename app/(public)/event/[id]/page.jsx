import React from "react";
import PropmtCard from "@components/PromptCard";
import GoogleMaps from "@components/GoogleMaps";

async function getEvent(id) {
    const data = await fetch(`https://next-szevents.vercel.app/api/szevent/${id}`);
    return data.json();
}

export default async function EventPage({ params }) {
    const post = await getEvent(params.id);
    return (
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
            <PropmtCard post={post} />
            <GoogleMaps />
        </div>
    );
}
