import React from 'react';
import Link from 'next/link';

function Avatar({ url, className }) {
    return (
        <Link href={'/signin'}>
            <div>
                <img src={url} alt='use' width={100} height={100} className={`w-8 h-8 rounded-full object-cover object-center cursor-pointer hover:scale-110 transition ease-in-out !ml-auto !${className}`} />
            </div>
        </Link>
    )
}

export default Avatar
