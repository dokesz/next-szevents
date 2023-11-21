"use client";

import Link from "next/link";
import { useState } from "react";

import { UploadButton } from "@/utils/uploadthing";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleUploadComplete = (res) => {
    // Do something with the response
    setPost({ ...post, image: res[0].url });
    setUploadComplete(true); // Set upload status to complete
  };

  const handleUploadError = (error) => {
    // Do something with the error.
    alert(`ERROR! ${error.message}`);
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] text-black sm:text-4xl text-left">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Poszt {type}</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-semibold text-base text-gray-700">
            Esemény neve
          </span>
          <textarea
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="Ide írd az esemény nevét"
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-semibold text-base text-gray-700">
            Esemény leírása
          </span>
          <textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder="Ide írd a leírást"
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-semibold text-base text-gray-700">
            Esemény dátuma
          </span>
          <input
            value={post.date}
            onChange={(e) => setPost({ ...post, date: e.target.value })}
            placeholder="Ide írd az esemény dátumát"
            required
            className="form_input"
            type="date"
          ></input>
        </label>
        <label>
          <span className="font-semibold text-base text-gray-700">
            Adj hozzá egy tag-et{" "}
            <span className="font-normal">
              (koncert, hivatalos, egyéb)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          ></input>
        </label>
        <label>
          <span className="font-semibold text-base text-gray-700">
            Image Upload
          </span>
          <UploadButton
            appearance={{
              button:
                "px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white",
              container:
                "w-max flex-row rounded-md p-1 border-cyan-300 bg-slate-800",
              allowedContent:
                "flex h-8 flex-col items-center justify-center px-2 text-white",
            }}
            endpoint="imageUploader"
            onClientUploadComplete={handleUploadComplete}
            onUploadError={handleUploadError}
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-md">
            Visszalépés
          </Link>

          <button
            type="submit"
            disabled={submitting || !uploadComplete}
            className="px-5 py-1.5 text-md bg-primary-orange rounded-full text-black"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
