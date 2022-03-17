import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { get_news_posts } from '../../utils/contentful';
import Link from 'next/link';
import slugify from 'slugify';
import { Animated } from '../../components/animated';


const News: NextPage = ({news_posts}: any) => {
    return (
        <>
            <Head>
                <title>Kykeon Analytics</title>
                <meta name="description" content="Kykeon Analytics"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='news'/>

            <main className='bg-accent-1' style={{minHeight: '70vh'}}>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className='px-8 lg:px-16 pt-8 lg:pt-16'>
                        <Animated delay={75} className='font-thin text-6xl'>
                            News
                        </Animated>
                        <br/>
                        <Animated delay={75} className='w-48 border-2 border-solid border-accent-8'/>
                        <br/>
                        <br/>
                    </div>
                    <div className='lg:px-16'>
                        <div className='px-8 grid gap-4 grid-cols-1 lg:grid-cols-4'>
                        {
                            news_posts.map((post: any, i: number) => {
                                const content = post.body.content.find((c: any) => c.data?.target?.fields?.file);
                                const img = content?.data?.target?.fields?.file ?? {};

                                return (
                                    <Link
                                        key={i}
                                        href={`/news/${slugify(post.title)}`}
                                    >
                                        <div className='transition-all ease-in duration-75 text-white hover:text-accent-8 cursor-pointer relative h-48'>
                                            <img
                                                className='rounded-lg h-48 object-cover'
                                                src={`https://${img.url}`}
                                                height={img.details.image.height}
                                                width={img.details.image.width}
                                            />
                                            <Link href={`/news/${slugify(post.title)}`} >
                                                <div className='absolute bottom-0 p-8 w-full rounded-b-lg bg-accent-10'>
                                                    {post.title}
                                                </div>
                                            </Link>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </main>

            <Footer/>
        </>
    );
};

export default News;

export async function getStaticProps() {
    const news_posts = await get_news_posts();
    return {
        props: {
            news_posts: news_posts ?? null,
        },
    }
}
