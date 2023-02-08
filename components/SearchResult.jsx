import Link from 'next/link';
import React from 'react';
import Pagination from './Pagination';
import Image from 'next/image';

function SearchResult({ results }) {

    // const numbers = results.map((item) => item.searchInformation?.formattedTotalResults);
    // const time = results.map((item) => item.searchInformation?.formattedSearchTime);
    const numbers = results.searchInformation?.formattedTotalResults
    const time = results.searchInformation?.formattedSearchTime

    // const res = results.map(item => {
    //     return item.items
    // });
    // const link = results.map(item => {
    //     return item.items.map(i => i.link)
    // });
    // const formattedUrl = results.map(item => {
    //     return item.items.map(i => i.formattedUrl)
    // });
    // const snippet = results.map(item => {
    //     return item.items.map(i => i.snippet)
    // });
    // console.log('title>>', title);

    // const data = res.map((item) => item)
    // console.log(data);

    return (
        <div className='flex flex-col w-screen sm:px-10 px-5 py-4 lg:pl-48'>
            <p className='text-xs text-gray-500'>
                About {numbers} results ({time} seconds)
            </p>

            {/* {results?.map(item => item.items?.map((i) => {
                const image = i.pagemap.cse_thumbnail
                // console.log(image);
                return (
                    <div className='max-w-xl py-4' key={i.link}>
                        <div className='group'>
                            <Link href={i.link} className='text-sm'>
                                {i.formattedUrl}
                            </Link>
                            <Link href={i.link}>
                                <h2 className='truncate text-xl text-blue-700 sm:text-primary sm:font- my-px group-hover:underline'>
                                    {i.title}
                                </h2>
                            </Link>
                        </div>
                        <p className='text-sm text-neutral-700'>
                            {i.snippet.substr(0, 120)}...
                        </p>
                    </div>
                )
            }))} */}
            {results.items?.map((result) => (
                <div key={result.link}>
                    <div className='max-w-xl py-4' key={result.link}>
                        <div className='group'>
                            <Link href={result.link} className='text-sm'>
                                {result.formattedUrl}
                            </Link>
                            <Link href={result.link}>
                                <h2 className='truncate text-xl text-blue-700 sm:text-primary sm:font- my-px group-hover:underline'>
                                    {result.title}
                                </h2>
                            </Link>
                        </div>
                        <p className='text-sm text-neutral-700'>
                            {result.snippet.substr(0, 120)}...
                        </p>
                    </div>
                </div>
            ))}
            <Pagination />

        </div>
    )
}

export default SearchResult
