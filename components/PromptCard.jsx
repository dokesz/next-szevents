"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const PropmtCard = ({ post, handleTagClick, handleEdit, handleDelete, tag }) => {
  const { data: session } = useSession();
  const [promptCardWidth, setPromptCardWidth] = useState("");
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathName === "/") {
      setPromptCardWidth("md:w-[360px]");
    } else {
      setPromptCardWidth("");
    }
  }, [pathName]);

  const handleClick = () => {
    if (pathName === "/profile") return;
    router.push(`/event/${post?._id}`);
  }

  return (

    <div className={`${promptCardWidth} prompt_card mt-3`}>
      <div className="cursor-pointer" onClick={handleClick}>
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3">
            <Image
              src={post?.creator?.profilePicture}
              alt="user_image"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />

            <div className="flex flex-col">
              <h2 className="font-semibold text-gray-900">
                {post?.creator?.name}
              </h2>
            </div>
          </div>
        </div>
        {
          post?.image && (
            <div className="text-center mt-2">
              <Image src={post?.image} width={300} height={120} alt="post image" className="mx-auto mt-2 object-contain" />
            </div>
          )
        }
      </div>
      <p className="text-center my-4 text-sm text-gray-700">{post?.title}</p>
      {useParams().id && (
        <p className="text-center my-4 text-sm text-gray-700">{post?.description}</p>
      )}
      <p
        className="text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick?.(post?.tag)}
      >
        #{post?.tag}
      </p>
      {
        session?.user?.id === post?.creator?._id && pathName === "/profile" && (
          <div className="mt-5 flex justify-center gap-4 border-t border-gray-100 pt-3">
            <p
              className="text-sm text-lime-500 cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="text-sm text-red-600 cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )
      }
    </div >
  );
};

export default PropmtCard;
