import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function Pagination() {

    const router = useRouter();

    const startIndex = Number(router.query.start) || 0;


    return (
        <div className='max-w-xl mt-4 mb-10 flex justify-between'>
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline hover:text-blue-500 w-full'>
                        <HiChevronLeft className='w-6 h-6 text-blue-500' />
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline hover:text-blue-500 w-full'>
                    <HiChevronRight className='w-6 h-6 text-blue-500' />
                    <p>Next</p>
                </div>
            </Link>
        </div>
    )
}

export default Pagination
