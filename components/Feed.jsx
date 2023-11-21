"use client"
import React, { useState, useEffect } from 'react';
import PromptCard from './PromptCard.jsx';

const PromptCardList = ({ data, handleTagClick }) => (
  <div className="prompt_layout">
    {data.map(post => (
      <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
    ))}
  </div>
);

const Feed = ({ events }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [groupEvents, setGroupEvents] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!events) return;
    setPosts(events);
    setIsLoading(false);
  }, [events]);

  console.log('Posts:', posts);

  useEffect(() => {
    if (!Array.isArray(posts)) return;

    const filterPosts = posts.filter(post =>
      post.title.includes(searchText) ||
      post.tag.includes(searchText) ||
      post.creator.name.includes(searchText)
    );
    setFilteredPosts(filterPosts);

    const groupedEvents = posts.reduce((acc, post) => {
      const tag = post.tag || 'Egyéb';
      acc[tag] = acc[tag] || [];
      acc[tag].push(post);
      return acc;
    }, {});
    setGroupEvents(groupedEvents);
  }, [searchText, posts]);

  const handleSearchChange = e => setSearchText(e.target.value);
  const handleTagClick = tag => setSearchText(tag);

  if (isLoading) return <p>Posztok betöltése folyamatban van...</p>;
  if (!posts) return <p>Nincs megjeleníthető poszt</p>;

  const displayData = searchText === '' ? groupEvents : filteredPosts;
  const isGrouped = searchText === '';

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
