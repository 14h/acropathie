import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: NextPage = () => {

    return (
        <div className='bg-accent-4 px-4 lg:px-16 py-4 lg:py-16 flex flex-col lg:flex-row justify-between items-center lg:items-end text-white'>
            <Link href='/'>
                <div className='flex flex-row justify-center items-center cursor-pointer'>
                    <Image src="/kykeon_icon.png" alt="kykeon Logo" width={78} height={72} />
                    <div className='hidden lg:block'>
                        <div className='text-xl font-bold'>
                            Kykeon
                        </div>
                        <div className=''>
                            analytics
                        </div>
                    </div>
                </div>
            </Link>
            <div className='text-center'>
                Kykeon Analytics Ltd.<br/>
                Email: <a href='mailto:info@kykeonanalytics.com'>info@kykeonanalytics.com</a>
            </div>
            <div>
                © 2021 All rights reserved.
            </div>
        </div>
    );
};
