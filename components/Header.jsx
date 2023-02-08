import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { IoMdClose, IoMdMenu, IoMdSearch } from 'react-icons/io';
import Avatar from './Avatar';
import Options from './Options';
import { useSession } from 'next-auth/react';

function Header() {

    const router = useRouter();
    const searchInputRef = useRef();
    const { data: session } = useSession();

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }


    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex sm:hidden flex-col w-screen sm:py-10 sm:px-10 px-5 pt-5 pb-2'>
                <div className='flex items-center justify-between w-full'>
                    <div className=''>
                        <IoMdMenu className='w-6 h-6 text-gray-600' />
                    </div>
                    <Image
                        src={'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}
                        unoptimized
                        alt='Google'
                        width={1000}
                        className='w-24 cursor-pointer h-auto'
                        height={1000}
                        draggable='false'
                        onClick={() => router.push('/')}
                    />
                    <Avatar url={'https://webtech-blog.vercel.app/_next/image?url=%2Favatar.jpg&w=3840&q=75' || session?.user?.image} className={'mx-auto flex right-0 top-0'} />
                </div>
                <form className='border flex rounded-full shadow-sm items-center pl-1 pr-3 max-w-xs py-2 mb-4 w-screen mt-5'>
                    <IoMdSearch
                        className='w-8 h-8 text-gray-500 cursor-pointer ml-3 transition duration-100 hover:scale-125'
                    />
                    <input
                        ref={searchInputRef}
                        placeholder={router.query.term}
                        type="text"
                        defaultValue={router.query.term}
                        className='w-full focus:outline-none px-2'
                    />
                    <Image src={'/mic.png'} alt='mic' width={1000} height={1000} className='w-8 h-8 mr-1' />
                    <Image src={'/lens.png'} alt='mic' width={1000} height={1000} className='w-8 h-8' />
                    <button
                        type='submit'
                        hidden
                        onClick={search}
                        className='ml-2 text-sm'
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className='hidden sm:flex flex-col w-screen p-10'>
                <div className='flex items-center justify-start w-full'>
                    <Image
                        src={'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}
                        unoptimized
                        alt='Google'
                        width={1000}
                        className='w-24 cursor-pointer h-auto'
                        height={1000}
                        draggable='false'
                        onClick={() => router.push('/')}
                    />
                    <form className='border flex flex-grow rounded-full shadow-sm max-w-3xl items-center px-4 py-1.5 ml-10'>
                        <input
                            ref={searchInputRef}
                            type="text"
                            className='w-full flex-grow focus:outline-none px-2'
                            defaultValue={router.query.term}
                        />
                        <IoMdClose
                            className='w-6 h-6 text-gray-500 cursor-pointer transition duration-100 hover:scale-125'
                            onClick={() => (searchInputRef.current.value = "")}
                        />
                        <span className='hidden sm:inline-flex bg-gray-300 w-px h-5 mx-2'></span>
                        <Image src={'/mic.png'} alt='mic' width={1000} height={1000} className='w-7 h-7 mr-1 cursor-pointer transition duration-100 hover:scale-125' />
                        <IoMdSearch
                            onClick={search}
                            className='w-6 h-6 text-blue-500 cursor-pointer transition duration-100 hover:scale-125'
                        />
                        <button
                            type='submit'
                            hidden
                            onClick={search}
                            className='ml-2 text-sm'
                        >
                            Search
                        </button>
                    </form>
                    <div className='flex-1'>
                        <Avatar url={'https://webtech-blog.vercel.app/_next/image?url=%2Favatar.jpg&w=3840&q=75' || session?.user?.image} className={'mx-auto flex right-0 top-0'} />
                    </div>
                </div>
            </div>

            <Options searchInputRef={searchInputRef} search={search} />
        </header>
    )
}

export default Header
