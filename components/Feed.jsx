"use client";
import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard.jsx";
import useSWR from 'swr';

const PromptCardList = ({ data, handleTagClick }) => (
  <div className="prompt_layout">
    {data.map(post => (
      <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
    ))}
  </div>
);

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [groupEvents, setGroupEvents] = useState({});

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }

    return res.json()
  }

  const product_url = '/api/szevent';
  const { data: posts, error, isLoading } = useSWR(product_url, fetcher);

  useEffect(() => {

    if (!posts || error) {
      return;
    }

    if (!error && posts) {
      const filterPosts = posts.filter(post =>
        post.title.includes(searchText) ||
        post.tag.includes(searchText) ||
        post.creator.name.includes(searchText)
      );
      setFilteredPosts(filterPosts);

      const groupedEvents = posts.reduce((acc, post) => {
        const tag = post.tag || "Egyéb";
        acc[tag] = acc[tag] || [];
        acc[tag].push(post);
        return acc;
      }, {});
      setGroupEvents(groupedEvents);
    }
  }, [searchText, posts, error]);

  const handleSearchChange = e => setSearchText(e.target.value);
  const handleTagClick = tag => setSearchText(tag);

  if (error) return <div className="flex text-center mt-4 text-red-700 font-bold">Hiba az események betöltése során, kérlek frissítsd az oldalt!</div>;
  if (!posts) return <div className="flex text-center mt-4">Posztok betöltése...</div>;

  const displayData = searchText === "" ? groupEvents : filteredPosts;
  const isGrouped = searchText === "";

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search by tag, title, or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {!isLoading && isGrouped ? (
        Object.entries(displayData).map(([tag, posts]) => (
          <div key={tag}>
            <h1 className="text-2xl mt-4 font-bold">{tag}</h1>
            <PromptCardList data={posts} handleTagClick={handleTagClick} />
          </div>
        ))
      ) : (
        <PromptCardList data={displayData} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};
export default Feed;
