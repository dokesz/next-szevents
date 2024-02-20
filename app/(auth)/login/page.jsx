"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

const SignInPage = () => {
    const callBackUrl = useSearchParams().get('callbackUrl') ?? '';
    return (
        <section className='flex w-screen h-screen justify-center items-center'>
            <div className='flex flex-col border border-slate-600 p-8 rounded-3xl shadow-xl h-96'>
                <div className='flex flex-col items-center'>
                    <Image src='/szevents-logo.png' width={240} height={240} alt='Singin page logo' className='text-mainText' />
                    <h1 className='text-2xl font-bold mt-4 text-center'>Üdvözöllek a Szevents oldalán</h1>
                    <p className='text-gray-500 text-sm mt-2'>Kérlek jelentkezz be a folytatáshoz</p>
                </div>
                <div className='flex flex-col flex-grow justify-center mt-6'>
                    <button
                        className='flex items-center justify-center gap-2 bg-slate-300 rounded-md p-2 w-full'
                        onClick={() => signIn('google', { callbackUrl: callBackUrl })}
                    >
                        <Image src='/google.svg' width={24} height={24} alt='Google icon' />
                        Jelentkezz be Google fiókkal
                    </button>
                    <button
                        className='flex items-center justify-center gap-2 bg-slate-100 rounded-md p-2 w-full mt-2'
                    >
                        <a href="/">Irány vissza a kezdőoldalra</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SignInPage