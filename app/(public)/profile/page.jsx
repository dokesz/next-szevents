"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // fetch data from server
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  if (!session) return (<div className='flex flex-col'>
    <h1 className='text-2xl font-bold mt-4'>Guest</h1>
    <p className='text-gray-500 text-sm'>
      You are not logged in. Please login to view your profile.
    </p>
  </div>);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/szevent/${post._id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const newPosts = posts.filter((p) => p._id !== post._id);
          setPosts(newPosts);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
