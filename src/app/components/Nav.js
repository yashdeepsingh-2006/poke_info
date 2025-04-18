"use client"

import React from 'react'
import Image from 'next/image'
import Search from './Search'

export default function Nav() {
    return (
        <div>
            <nav className='flex flex-row justify-between px-5 py-2 bg-white h-20 w-full'>

                {/* div containing logo */}
                <div className='w-full ml-10 mt-2'>
                    <Image
                        className='h-10 w-auto'
                        height={80}
                        width={110}
                        src={"/logo.png"}
                        alt='Logo-mintify'
                    />
                </div>

                {/* div containing search bar */}
                <div className='hidden md:block mt-1'>
                    <Search/>
                </div>
            </nav>
            <hr/>
        </div>
    )
}
// this is final 