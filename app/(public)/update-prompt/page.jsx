"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@/components/Form";

const EditPrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ title: "", tag: "", description: "", image: "" });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/szevent/${promptId}`);
      const data = await response.json();

      setPost({ title: data.title, tag: data.tag, image: data.image, description: data.description });
    };
    if (promptId) getPromptDetails();
  }, [promptId]);

  // If the user is not logged in, display Not Signed In
  if (!session) router.push("/");

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("Prompt ID not found");

    try {
      const response = await fetch(`/api/szevent/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: post.title,
          tag: post.tag,
          description: post.description,
          image: post.image
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Szerkesztés"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default EditPrompt;
