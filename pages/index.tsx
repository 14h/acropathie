import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Image from 'next/image';
import { Animated } from '../components/animated';


//      <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }
const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kykeon Analytics</title>
                <meta name="description" content="Kykeon Analytics"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='home'/>

            <main className='bg-accent-1' style={{minHeight: '70vh'}}>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className='px-8 lg:px-16 pt-8: lg:pt-16'>
                        <Animated delay={75} className='font-thin text-6xl'>
                            Harm Reduction Analysis
                        </Animated>
                        <br/>
                        <Animated delay={75} className='w-48 border-2 border-solid border-accent-8'/>
                        <br/>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between h-full px-8 lg:px-16'>
                        <Animated delay={300} className='font-thin text-2xl'>
                            Kykeon Analytics is a public service initiative providing analytical harm reduction solutions in the field of newly emerging chemical entities.
                            <br/>Our aim us is to create quality analytical spectra of novel chemical agents that have yet to be studied and scheduled,
                            <br/>in order to characterize them and to create analytical spectra of these emerging compounds.
                            <br/>Our goal is to provide frontline harm reduction organization, forensic scientists and researchers with the tools they need to save lives and advance our understanding of science.
                            <br/>Our services are available free of charge as a public service to qualified organizations including,
                            <br/>harm reduction organizations, academic  researchers, forensic scientists, as well as frontline medical teams.
                        </Animated>
                        <Animated delay={75} className='hidden lg:block'>
                            <Image src="/kykeon_icon.png" alt="kykeon Logo" width={580} height={500} />
                        </Animated>

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

export default Home;
