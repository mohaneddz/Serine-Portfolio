import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='screen center flex-col gap-8 font-black text-primary-dim'>
            <h1 className=' text-7xl '>404 - Page Not Found</h1>

            <div className="">
                <p className='text-xl text-center'>Sorry, the page you are looking for does not exist :O </p>
                <Link href="/" className='text-center'>
                    <p className='text-tertiary underline hover-scale click'>
                        Go back to Home
                    </p>
                </Link>
            </div>

        </div>
    );
};

export default NotFound;