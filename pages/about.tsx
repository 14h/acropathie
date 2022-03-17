import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Animated } from '../components/animated';
import Image from 'next/image';

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kykeon Analytics</title>
                <meta name="description" content="Kykeon Analytics"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='about'/>
            <main className='bg-accent-1 pb-48'>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className='px-8 lg:px-16 pt-8 lg:pt-16'>
                        <Animated delay={75} className='font-thin text-6xl'>
                            About us
                        </Animated>
                        <br/>
                        <Animated delay={75} className='w-48 border-2 border-solid border-accent-8'/>
                        <br/>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between h-full px-8 lg:px-16'>
                        <div className='lg:w-1/2 '>
                            <Animated delay={75} className='lg:hidden p-8'>
                                <Image src="/1.jpeg" alt="kykeon Logo"  className='rounded-lg' width={560} height={380} />
                            </Animated>
                            <Animated delay={300} className='font-thin text-xl'>
                                We specialize in analytically characterizing new chemical entities (NCE) using infrared spectroscopy and nuclear magnetic resonance techniques.
                                <br/>
                                We aim to build comprehensive quality spectral libraries of NCE, to provide frontline workers with the necessary tools required to identify novel substances and assist in the effort to help reduce the potential harm from these unknown compounds.
                                <br/>
                                As a public service our libraries are available free of charge to non-profit frontline organizations involved in this effort, such has harm-reduction organizations, public medical providers, law enforcement and scientific researchers.
                                <br/>
                                Please note that we are currently in the research and development phase and are working hard to be able to bring you high quality spectra by 2022.
                            </Animated>
                        </div>
                        <Animated delay={75} className='hidden lg:block w-1/2 p-8'>
                            <Image src="/4.jpeg" alt="kykeon Logo"  className='rounded-lg' width={560} height={380} />
                        </Animated>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <Animated delay={75} className='mx-auto text-center p-8'>
                        <Image src="/5.jpeg" alt="kykeon Logo" className='rounded-lg' width={980} height={380}/>
                    </Animated>
                    <br/>
                    <Animated delay={75} className=' text-3xl text-center p-8'>
                        General outline of our operating precedure for our harm reduction public services
                    </Animated>
                    <Animated delay={75} className='w-1/4 mx-auto border-2 border-solid border-accent-5'/>
                    <Animated delay={300} className='font-thin text-xl p-8'>
                        The operational guidelines for our harm reduction services follow these basic step:
                        <br/>1) Our monitoring team identified novel unclassified pharmacological agents and the vendors who sell them.
                        <br/>2) For substances that are not explicitly listed under the Canadian controlled substances act, our consultants submit an inquiry to Health Canada to inquire about their status in order to to confirm that the that they may be stored and analyzed in an appropriate analytical laboratory, as well as inquire about any additional guidelines and procedures that must be followed when working with such a substance.
                        <br/>3) Based on this information, our team conducts preliminary test purchases of novel pharmaceutical agents, and analytically characterizes them in order to identify any possible toxic contaminants in the samples as well as the identify samples which contain different compounds as those advertised by the vendor.
                        <br/>4) If our analyzes reveal samples that pose a hazard due to either of the above we issue an early warning alert which can be publicly accessed, in an effort to dissuade potential customers from obtaining, or even consuming these products.
                        <br/>Furthermore, these samples will also be spectroscopically catalogued and contained in harm reduction libraries to help harm reduction organizations identify these toxic samples, if they are encountered in the field.
                        <br/>5) Of sufficient purity which do not suffer from the above deficits will be added to our standard spectral libraries for the use of harm reduction groups, academic researchers and medical first responders.
                    </Animated>
                    <Animated delay={75} className='w-1/4 mx-auto border-2 border-solid border-accent-5'/>
                </div>
            </main>

            <Footer/>
        </>
    );
};

export default About;
