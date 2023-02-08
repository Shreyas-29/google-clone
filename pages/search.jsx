import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import Response from '@/Response';
import SearchResult from '@/components/SearchResult';

function Search({ results }) {
    console.log(results);
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <SearchResult results={results} />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData
        ? Response
        : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
            .then((response) => response.json());

    // after the server has rendered... pass the results to client
    return {
        props: {
            results: data,
        }
    }

}