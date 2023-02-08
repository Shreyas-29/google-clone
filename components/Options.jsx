import React, { useRef } from 'react';
import Option from './Option';
import { BiSearch, BiImage, BiNews } from 'react-icons/bi';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { RiMapPin2Line } from 'react-icons/ri';
import { IoMdMore } from 'react-icons/io';
import Link from 'next/link';
import { useRouter } from 'next/router';



function Options({ searchInputRef, search }) {

    const router = useRouter();
    // const searchInputRef = useRef();

    const searchImage = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/images?term=${term}`);
        console.log('search')
    }

    return (
        <>
            <div className='px-5 md:px-10 w-full text-gray-600 justify-start hidden sm:flex items-center border-b text-sm lg:justify-start lg:space-x-48 lg:pl-48'>
                <div className='flex items-center space-x-6'>
                    <button onClick={searchImage}>
                        <Option Icon={BiSearch} title='All' selected />
                    </button>
                    <Option Icon={BiImage} title='Images' />
                    <Option Icon={AiOutlinePlaySquare} title='Videos' />
                    <Option Icon={BiNews} title='News' />
                    <Option Icon={RiMapPin2Line} title='Maps' />
                    <Option Icon={IoMdMore} title='More' />
                </div>
                <div className='space-x-4 flex items-center mb-2 sm:border-0 border-l border-gray-400 pl-4 ml-4'>
                    <p className='hover:text-gray-900 cursor-pointer'>Settings</p>
                    <p className='hover:text-gray-900 cursor-pointer'>Tools</p>
                </div>
            </div>

            <div className='relative sm:hidden flex items-center'>
                <div className='px-5 md:px-10 w-full text-gray-600 justify-start  border-b text-sm flex lg:justify-start lg:space-x-48 lg:pl-48 overflow-x-scroll scrollbar-hide'>
                    <div className='flex items-center space-x-6'>
                        <button onClick={searchImage}>
                            <Option Icon={BiSearch} title='All' selected />
                        </button>
                        <button onClick={searchImage}>
                            <Option Icon={BiImage} title='Images' />
                        </button>
                        <Option Icon={AiOutlinePlaySquare} title='Videos' />
                        <Option Icon={BiNews} title='News' />
                        <Option Icon={RiMapPin2Line} title='Maps' />
                        <Option Icon={IoMdMore} title='More' />
                    </div>
                    <div className='space-x-4 sm:mb-3 flex items-center mb-2 border-l border-gray-400 pl-4 ml-4'>
                        <p className='hover:text-gray-900 cursor-pointer'>Settings</p>
                        <p className='hover:text-gray-900 cursor-pointer'>Tools</p>
                    </div>
                    <div className='bg-gradient-to-l from-white h-8 w-8 absolute right-0 top-0 z-10'></div>
                </div>
            </div>
        </>
    )
}

export default Options
