"use client"
import PromptCard from "./PromptCard";
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'
import { Plus } from 'lucide-react';
import Link from "next/link";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {

  const { data: session } = useSession();

  return (
    <section className="w-full mt-6">

      {session?.user.image && (

        <div className='flex flex-row'>
          <Image src={session?.user?.image} width={140} height={140} quality={100} alt='User Image' className='flex  rounded-full' />
          <div className="flex ml-5 flex-col justify-center">
            <h1 className='text-2xl font-bold mt-4'>{session?.user?.name}</h1>
            <p className='text-gray-500 text-sm'>{session?.user?.email}</p>
          </div>
        </div>

      )}

      <div className='flex  items-center mt-8 justify-between'>
        <h1 className='text-2xl font-bold'>Posztjaim</h1>
        <Link href='/create-post'><button className=' bg-mainGreen rounded-full p-2 mx-2 hover:bg-hoverGreen hidden md:flex'><Plus className='mr-1' />Új poszt létrehozása</button></Link>
        <Link href='/create-post'><button className='flex md:hidden bg-mainGreen rounded-full p-2 mx-2 hover:bg-hoverGreen' href="/create-post"><Plus /></button></Link>
      </div>
      <div className="mt-10 prompt_layout">
        {data.map((post) => {
          return (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
