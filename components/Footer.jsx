import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (

        <div className="bg-footer text-white">
            <div className="flex justify-between items-center max-w-7xl m-auto p-4">
                <Image src="/SZE-logo.png" width={200} height={200} />
                <div className="flex flex-col items-end">
                    <p>9026 Győr, Egyetem tér 1. </p>
                    <Link href="mailto:help@szevents.hu">help@szevents.hu</Link>
                    <Link href="/kapcsolat">Kapcsolat</Link>
                </div>
            </div>
        </div>

    );
}
