import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { get_news_posts } from '../../utils/contentful';
import slugify from 'slugify';
import { Animated } from '../../components/animated';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from 'next/link';

const renderOptions = {
    renderNode: {
        [INLINES.EMBEDDED_ENTRY]: (node: any, children: any) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === "blogPost") {
                return (
                    <Link href={`/news/${slugify(node.data.target.fields.title)}`}>{node.data.target.fields.title}</Link>
                );
            }
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === "codeBlock") {
                return (
                    <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
                );
            }

            if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
                return (
                    <iframe
                        src={node.data.target.fields.embedUrl}
                        height="100%"
                        width="100%"
                        frameBorder="0"
                        scrolling="no"
                        title={node.data.target.fields.title}
                        allowFullScreen={true}
                    />
                );
            }
        },

        [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
            // render the EMBEDDED_ASSET as you need
            return (
                <div className='my-8 lg:my-16 lg:mx-48'>
                    <img
                        className='rounded-lg'
                        src={`https://${node.data.target.fields.file.url}`}
                        height={node.data.target.fields.file.details.image.height}
                        width={node.data.target.fields.file.details.image.width}
                        alt={node.data.target.fields.description}
                    />
                </div>
            );
        },
    },
};

const NewsPost: NextPage = ({post}: any) => {
    if (!post) {
        return null;
    }
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
                            { post.title }
                        </Animated>
                        <br/>
                        <Animated delay={75} className='w-48 border-2 border-solid border-accent-8'/>
                        <br/>
                        <br/>
                    </div>
                    <Animated delay={300} className='px-8 lg:px-16'>
                        {
                            documentToReactComponents(post.body, renderOptions)
                        }
                    </Animated>
                    <br/>
                    <br/>
                </div>
            </main>

            <Footer/>
        </>
    );
};

export default NewsPost;

export async function getStaticProps({params}: any) {
    const {slug} = params;

    const news_posts = await get_news_posts();

    const post = news_posts.find(({title}: any) => slugify(title) === slug) ?? {};

    return {
        props: {
            post: post ?? null,
        },
    }
}

export async function getStaticPaths() {
    const news_post = await get_news_posts();

    return {
        paths: news_post?.map(({title}: any) =>`/news/${slugify(title)}`) ?? [],
        fallback: true,
    }
}
