import React from 'react';

function Footer() {
    return (
        <footer className='grid w-full bottom-0 bg-stone-100'>
            <div className='px-10 py-3 border-b'>
                <p className='text-xs md:text-sm text-gray-500 cursor-pointer hover:text-gray-800'>India</p>
            </div>
            <div className='flex flex-col space-y-4 sm:flex-row items-center justify-between w-full px-5 md:px-10 py-3'>
                <div className='flex items-center space-x-4'>
                    <p className='text-xs md:text-sm text-gray-500 cursor-pointer hover:text-gray-800'>About</p>
                    <p className='text-xs md:text-sm text-gray-500 cursor-pointer hover:text-gray-800'>Advertising</p>
                    <p className='text-xs md:text-sm text-gray-500 cursor-pointer hover:text-gray-800'>Business</p>
                    <p className='text-xs md:text-sm text-gray-500 cursor-pointer hover:text-gray-800'>How Search Works</p>
                </div>
                <div className='flex items-center space-x-4 text-xs md:text-sm'>
                    <p className='text-xs md:text-sm text-gray-500 cursor-pointer hover:text-gray-800'>Privacy</p>
                    <p className='text-xs md:text-sm text-gray-500 cursor-pointer hover:text-gray-800'>Terms</p>
                    <p className='text-xs md:text-sm text-gray-500 cursor-pointer hover:text-gray-800'>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
