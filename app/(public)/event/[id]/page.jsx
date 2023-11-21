"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PropmtCard from "@components/PromptCard";
import GoogleMaps from "@components/GoogleMaps";

const EventPage = ({ params }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        // fetch data from server
        const fetchPosts = async () => {
            const response = await fetch(`/api/test/${params?.id}`);
            const data = await response.json();
            setPost(data);
        };

        if (params?.id) fetchPosts();
    }, [params?.id]);

    return (

        <div className="flex gap-2 ">

            <PropmtCard
                post={post}
            />
            <GoogleMaps />
        </div>


    );
};

export default EventPage;
