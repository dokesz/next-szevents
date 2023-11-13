"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PropmtCard from "@components/PromptCard";

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
        <PropmtCard
            post={post}
        />
    );
};

export default EventPage;
