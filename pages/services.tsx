import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Animated } from '../components/animated';
import Image from 'next/image';

const Services: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kykeon Analytics</title>
                <meta name="description" content="Kykeon Analytics"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='services'/>
            <main className='bg-accent-1 pb-48'>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className='p-8 lg:p-16'>
                        <Animated delay={75} className='font-thin text-6xl'>
                            Our services
                        </Animated>
                        <br/>
                        <Animated delay={75} className='w-48 border-2 border-solid border-accent-8'/>
                        <br/>
                        <Animated delay={300} className='font-thin text-2xl '>
                            Kykeon Analytics is a public service initiative providing analytical harm reduction solutions in the field of newly emerging chemical entities.
                            <br/>Our aim us is to create quality analytical spectra of novel chemical agents that have yet to be studied and scheduled,
                            <br/>in order to characterize them and to create analytical spectra of these emerging compounds.
                            <br/>Our goal is to provide frontline harm reduction organization, forensic scientists and researchers with the tools they need to save lives and advance our understanding of science.
                            <br/>Our services are available free of charge as a public service to qualified organizations including,
                            <br/>harm reduction organizations, academic  researchers, forensic scientists, as well as frontline medical teams.
                        </Animated>
                    </div>
                    <div className='bg-accent-2 mx-2 rounded-lg lg:mx-16'>
                        <div className='flex flex-col lg:flex-row justify-between h-full p-8 lg:p-16'>
                            <div className='lg:w-1/2 text-white'>
                                <Animated delay={75} className='font-thin text-4xl'>
                                    Creating libraries of quality analytical spectra
                                </Animated>
                                <br/>
                                <Animated delay={75} className='w-48 border-2 border-solid border-accent-8'/>
                                <br/>
                                <Animated delay={75} className='lg:hidden py-8'>
                                    <Image className='rounded-lg' src="/1.jpeg" alt="kykeon Logo" width={560} height={380} />
                                </Animated>
                                <Animated delay={300} className='font-thin text-xl '>
                                    At Kykeon Analytics, we specialize in the analytical characterization and identification of unscheduled and understudied psychopharmacological agents using nuclear magnetic resonance and infrared spectroscopic techniques.
                                    <br/>
                                    These advanced analytical techniques allow us to digitally fingerprint molecules with suspected bioactivity and to create an archive of spectral libraries, which can be called upon for the rapid identification of unknown samples.
                                    <br/>
                                    Comprehensive analytical spectral libraries help community workers and researchers by greatly reducing the time and expense that is traditionally required when manually elucidating the identity and structure of novel chemical agents.
                                    <br/>
                                </Animated>
                            </div>
                            <Animated delay={75} className='hidden lg:block w-1/2 p-8'>
                                <Image className='rounded-lg' src="/1.jpeg" alt="kykeon Logo" width={560} height={380} />
                            </Animated>
                        </div>
                        <Animated delay={75} className='w-1/2 mx-auto border-4 border-solid border-accent-8'/>
                        <div className='flex flex-col lg:flex-row justify-between h-full p-8 lg:p-16'>
                            <Animated delay={75} className='hidden lg:block w-1/2 p-8'>
                                <Image className='rounded-lg' src="/2.jpeg" alt="kykeon Logo" width={560} height={380} />
                            </Animated>
                            <div className='lg:w-1/2 text-white'>
                                <Animated delay={75} className='font-thin text-4xl'>
                                    Harm reduction
                                </Animated>
                                <br/>
                                <Animated delay={75} className='w-48 border-2 border-solid border-accent-8'/>
                                <br/>
                                <Animated delay={75} className='lg:hidden py-8'>
                                    <Image className='rounded-lg' src="/2.jpeg" alt="kykeon Logo" width={560} height={380} />
                                </Animated>
                                <Animated delay={300} className='font-thin text-xl'>
                                    We are dedicated to assisting harm reduction associations, frontline paramedics and forensic teams in their effort to save lives and keep our community members safe.
                                    <br/>
                                    Due to its ease of use and relatively low cost, community workers and volunteers overwhelmingly rely on the analytical method of Fourier transform infrared spectroscopic (FTIR) to identify unknown drug samples encountered in the field. Despite its benefits, FTIR suffers from the disadvantage that it can only positively identify previously catalogued substances.
                                    <br/>
                                    The rise in so called &quot;designer drugs&quot; means that there are now significantly more psychoactive substances in circulation than are listed in any conventional spe​​ctral database. The aim of Kykeon Analytics, is to fulfill the need for spectra of these novel compounds in order to give community workers the tools they need to identify drug samples in the field and thus save precious time, which can mean the difference between life and death in an emergency situation.
                                </Animated>
                            </div>
                        </div>
                        <Animated delay={75} className='w-1/2 mx-auto border-4 border-solid border-accent-8'/>
                        <div className='flex flex-col lg:flex-row justify-between h-full p-8 lg:p-16'>
                            <div className='lg:w-1/2 text-white'>
                                <Animated delay={75} className='font-thin text-4xl'>
                                    Preventative monitoring of novel chemical entities
                                </Animated>
                                <br/>
                                <Animated delay={75} className='w-48 border-2 border-solid border-accent-8'/>
                                <br/>
                                <Animated delay={75} className='lg:hidden py-8'>
                                    <Image className='rounded-lg' src="/3.jpeg" alt="kykeon Logo" width={560} height={380} />
                                </Animated>
                                <Animated delay={300} className='font-thin text-xl'>
                                    As part of our harm reduction efforts,
                                    we continuously monitor developments in the ever-expanding market of newly emerging psychoactive compounds. This allows us to rapidly identify novel substances with suspected bioactivty, and to analytically characterize their digital profiles and include them in spectral databases.
                                    <br/>
                                    In addition, we also conduct test purchases of unscheduled new chemical entities in order to identify any possible adulterants in these samples and to contribute to the safety of the public by issuing early warnings about any toxic contaminants or fraudulent misrepresentations that our analyses reveal.
                                </Animated>
                            </div>
                            <Animated delay={75} className='hidden lg:block w-1/2 p-8'>
                                <Image className='rounded-lg' src="/3.jpeg" alt="kykeon Logo" width={560} height={380} />
                            </Animated>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
};

export default Services;
