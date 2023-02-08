import React from 'react';
import { signOut, useSession, signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { BsGoogle } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Link from 'next/link';

function SignIn() {

    const { data: session } = useSession();
    const router = useRouter();


    if (session) {
        return (
            <div className='px-4 items-center grid place-items-center h-screen gap-8'>
                <Head>
                    <title>SignIn with Google</title>
                    <link rel="icon" href="/favicon.svg" />
                </Head>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <div className='inset-0 flex items-center justify-center'>
                        <div className='flex flex-col items-center justify-center px-16 py-12 my-12 sm:px-16 border rounded-3xl'>
                            <Link href={'/'}><p className='text-blue-400 text-sm mb-1'>Go Home</p></Link>
                            <Image
                                src={'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}
                                unoptimized
                                alt='Google'
                                width={1000}
                                className='w-24 cursor-pointer h-auto mb-6'
                                height={1000}
                                draggable='false'
                                onClick={() => router.push('/')}
                                title='Google Home'
                            />
                            <h2 className='text-xl font-semibold capitalize mb-2'>Welcome, {session.user.name}</h2>
                            <Image src={session.user.image} alt={session.user.name} unoptimized className='w-20 h-20 rounded-full mb-4 shadow-lg' width={1000} height={1000} />
                            <button onClick={() => signOut()} className='capitalize text-white px-4 py-2 font-medium shadow-md bg-blue-500  shadow-blue-500/40 rounded-lg relative transition-all duration-300 hover:scale-110 active:scale-95 ease-in-out'>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='px-4 items-center grid place-items-center h-screen gap-8'>
                <Head>
                    <title>SignIn with Google</title>
                    <link rel="icon" href="/favicon.svg" />
                </Head>
                <div className='inset-0 flex items-center justify-center my-12'>
                    <div className='flex flex-col items-center justify-center py-8 px-6 w-full border rounded-3xl'>
                        <Link href={'/'}><p className='text-blue-400 text-sm mb-1'>Go Home</p></Link>
                        <Image
                            src={'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}
                            unoptimized
                            alt='Google'
                            width={1000}
                            className='w-24 cursor-pointer h-auto mb-4'
                            height={1000}
                            draggable='false'
                            onClick={() => router.push('/')}
                            title='Google Home'
                        />
                        <p className='mb-3 text-neutral-800 font-medium flex flex-col items-center justify-center'>
                            <span className='mb-4'>You are not signed in.</span>
                            <button onClick={() => signIn()} className='capitalize text-white px-4 py-2 font-medium shadow-md bg-blue-500 shadow-blue-500/40 rounded-lg relative transition-all duration-300 hover:scale-110 active:scale-95 ease-in-out flex items-center justify-center gap-4'>
                                <BsGoogle size={18} /> Sign In with Google
                            </button>
                        </p>
                        <p className='text-sm text-neutral-700 mt-6 text-center w-3/4'>
                            By signing up, I agree to the Terms of Services and Privacy Policy
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
