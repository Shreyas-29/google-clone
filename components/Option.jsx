import React from 'react';

function Option({ Icon, title, selected }) {


    return (
        <div className={`flex items-center cursor-pointer space-x-1 border-b-2 sm:border-b-[3px] border-transparent hover:text-blue-500 hover:border-blue-500 pb-2 sm:pb-3 text-gray-600 ${selected && 'border-blue-500 text-blue-500'}`}>
            <Icon className='w-4 h-4 hidden sm:inline-flex' />
            <p className='inline-flex text-sm font-medium'>{title}</p>
        </div>
    )
}

export default Option
