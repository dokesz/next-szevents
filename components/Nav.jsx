"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const { status } = useSession();
  const [showLinks, setShowLinks] = useState(false);

  const links = [
    { href: "/", label: "Rendezvények", id: "rendezveny" },
    { href: "/profile", label: "Profil", id: "profil" },
  ]


  return (
    <nav>

      <div className="md:flex justify-between items-center gap-6 hidden">
        <div className="flex items-center min-h-[50px]">
          <Image src="/szevents-logo.png" width={160} height={160} />
        </div>
        <div className="flex gap-4">
          {links.map((link) => {
            return (
              <Link key={link.id} href={link.href}>{link.label}</Link>
            )
          })}

          {status === "authenticated" ? (
            <button onClick={() => signOut()}>Kijelentkezés</button>
          ) : (
            <Link href="/signIn">Bejelentkezés</Link>
          )}
        </div>
      </div>

      <div className="md:hidden flex flex-row">
        <Image src="/szevents-logo.png" width={160} height={160} />
        <div className="flex flex-grow w-[50px] justify-end">
          <button onClick={() => setShowLinks(!showLinks)}>{showLinks ? <X /> : <Menu />}</button>
        </div>
      </div>

      {showLinks && (
        <div className="flex flex-col basis-full items-end md:hidden mt-4 gap-4 transition-transform ease-in-out duration-500 ">
          {links.map((link) => {
            return (
              <Link key={link.id} href={link.href}>{link.label}</Link>
            )
          })}
        </div>
      )}
    </nav>

  )
}