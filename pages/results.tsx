import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { get_results } from '../utils/contentful';
import { Animated } from '../components/animated';
import Link from 'next/link';
import { useState } from 'react';

const Results: NextPage = ({ results }: any) => {
    const [accepted, set_accepted] = useState<boolean>(false);
    const [filtered_results, set_filtered_results] = useState<any[]>(results);
    const [search, set_search] = useState<string>('');

    const filter_results = (e: any) => {
        const search_term = e.target.value?.toLocaleLowerCase() ?? '';

        set_filtered_results(results.filter((result: any) => result.substance_name.toLocaleLowerCase().includes(search_term) || result.vendor_name.toLocaleLowerCase().includes(search_term)))
    }

    if (!accepted) {
        return (
            <>
                <Head>
                    <title>Kykeon Analytics</title>
                    <meta name="description" content="Kykeon Analytics"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <Header selected='results'/>
                <main className='bg-accent-1' style={{minHeight: '70vh'}}>
                    <div className='max-w-screen-2xl mx-auto'>
                        <div className='px-8 lg:px-16 pt-8 lg:pt-16'>
                            <div className='flex flex-col justify-between lg:flex-row'>
                                <div className='font-thin text-6xl'>
                                    Disclaimer
                                </div>
                                <input
                                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hidden"
                                    id="search" type="text" placeholder="Filter by keyword"/>
                            </div>
                            <br/>
                            <Animated delay={ 75 } className='w-48 border-2 border-solid border-accent-8'/>
                            <br/>
                        </div>
                        <div className='px-8 lg:px-16'>
                            We are not responsible for any consequence arising from the use of the results displayed by
                            Kykeon Analytics for making decisions. We do not promote the consumption of substances and
                            we do not guarantee that the vendors identified will reliably have the same purity of
                            product. The results are for informational purposes only.
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <div
                                    className='px-8 py-4 my-4 bg-accent-8 text-black font-bold transition-all duration-75 ease-in hover:bg-accent-9 cursor-pointer text-xl shadow-xl rounded-lg lg:w-1/4 mx-auto'
                                    onClick={ () => {
                                        set_accepted(true);
                                    } }
                                >
                                    I accept, show me the results
                                </div>
                                <Link
                                    href='/'
                                >
                                    <div
                                        className='px-8 py-4 my-4 bg-accent-8 text-black font-bold transition-all duration-75 ease-in hover:bg-accent-9 cursor-pointer text-xl shadow-xl rounded-lg lg:w-1/4 mx-auto'
                                        onClick={ () => {
                                            set_accepted(false);
                                        } }
                                    >
                                        I don&apos;t accept
                                    </div>
                                </Link>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </main>

                <Footer/>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>Kykeon Analytics</title>
                <meta name="description" content="Kykeon Analytics"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='results'/>
            <main className='bg-accent-1'  style={{minHeight: '70vh'}}>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className='px-8 lg:px-16 pt-8 lg:pt-16'>
                        <div className='flex flex-col justify-between lg:flex-row'>
                            <div className='font-thin text-6xl'>
                                Results
                            </div>
                            <input
                                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="search" type="text" placeholder="Filter by keyword" onChange={filter_results}/>
                        </div>
                        <br/>
                        <Animated delay={ 75 } className='w-48 border-2 border-solid border-accent-8'/>
                        <br/>
                    </div>
                    <Animated delay={ 300 } className='px-8 lg:px-16'>
                        <table className="table-auto w-full">
                            <thead>
                            <tr>
                                <th>Substance name</th>
                                <th>Vendor name</th>
                                <th>Result</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                filtered_results.map(({ substance_name, vendor_name, result, date }: any, i: number) => (
                                    <tr key={ i }>
                                        <td>{ substance_name }</td>
                                        <td>{ vendor_name }</td>
                                        <td>{ result }</td>
                                        <td>{ (new Date(date)).toLocaleDateString() }</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </Animated>
                </div>
            </main>

            <Footer/>
        </>
    );
};

export default Results;

export async function getStaticProps() {
    const results = await get_results();
    return {
        props: {
            results: results ?? null,
        },
    };
}
