import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (

        <div className="bg-footer text-white">
            <div className="flex flex-col md:flex-row md:justify-between items-center max-w-7xl m-auto p-4">
                <Image src="/SZE-logo.png" width={200} height={200} />
                <div className="flex flex-col items-center md:items-end">
                    <p>9026 Győr, Egyetem tér 1. </p>
                    <Link href="mailto:help@szevents.hu">help@szevents.hu</Link>
                </div>
            </div>
        </div>

    );
}
