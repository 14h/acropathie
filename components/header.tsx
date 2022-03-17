import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

type TProps = {
    selected: 'about' | 'home' | 'services' | 'news' | 'results';
}
{/*<Link href='/spectra'>*/}
{/*    <div className={`p-8 transition-all ease-in duration-75 ض hover:text-accent-8 cursor-pointer text-xl ${selected === 'spectra' ? 'text-accent-8' : ''}`}>*/}
{/*        Spectra*/}
{/*    </div>*/}
{/*</Link>*/}

export const Header = ({selected}: TProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='bg-accent-4 px-4 lg:px-16 text-white transition-all ease-in duration-75'>
            <div className='py-4 flex justify-between'>
                <Link href='/'>
                    <Image src="/icon.png" alt="kykeon Logo" width={180} height={80} />
                </Link>
                <div className='flex flex-row justify-center items-center hidden lg:flex'>
                    <Link href='/'>
                        <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'home' ? 'text-accent-8' : ''}`}>
                            Home
                        </div>
                    </Link>
                    <Link href='/services'>
                        <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'services' ? 'text-accent-8' : ''}`}>
                            Our services
                        </div>
                    </Link>
                    <Link href='/about'>
                        <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'about' ? 'text-accent-8' : ''}`}>
                            Who we are
                        </div>
                    </Link>
                    <Link href='/news'>
                        <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'news' ? 'text-accent-8' : ''}`}>
                            News
                        </div>
                    </Link>
                    <Link href='/results'>
                        <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'results' ? 'text-accent-8' : ''}`}>
                            Results
                        </div>
                    </Link>
                </div>
                <Link href='mailto:info@kykeonanalytics.com'>
                    <div
                        className='px-8 py-4 my-4 hidden lg:block bg-accent-8 text-black font-bold transition-all duration-75 ease-in hover:bg-accent-9 cursor-pointer text-xl shadow-xl rounded-lg'
                    >
                        CONTACT US
                    </div>
                </Link>
                <div className='lg:hidden py-4'>
                    <input onChange={() => setOpen(!open)} id="toggle" type="checkbox" />
                    <label className="hamburger" htmlFor="toggle">
                        <div className="top"/>
                        <div className="meat"/>
                        <div className="bottom"/>
                    </label>
                </div>
            </div>
            {
                open && (
                    <div className='flex flex-col justify-center items-center'>
                        <Link href='/'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'home' ? 'text-accent-8' : ''}`}>
                                Home
                            </div>
                        </Link>
                        <Link href='/services'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'services' ? 'text-accent-8' : ''}`}>
                                Our services
                            </div>
                        </Link>
                        <Link href='/about'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'about' ? 'text-accent-8' : ''}`}>
                                Who we are
                            </div>
                        </Link>
                        <Link href='/news'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'news' ? 'text-accent-8' : ''}`}>
                                News
                            </div>
                        </Link>
                        <Link href='/results'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'results' ? 'text-accent-8' : ''}`}>
                                Results
                            </div>
                        </Link>
                        <Link href='mailto:info@kykeonanalytics.com'>
                            <div
                                className='px-8 py-4 my-4 bg-accent-8 text-black font-bold transition-all duration-75 ease-in hover:bg-accent-9 cursor-pointer text-xl shadow-xl rounded-lg'
                            >
                                CONTACT US
                            </div>
                        </Link>
                        <br/>
                        <br/>
                    </div>
                )
            }
        </div>
    );
};
