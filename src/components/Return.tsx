"use client";

import Image from 'next/image';

const returnIcon = '/svgs/misc/return.svg';

export default function Return() {
    return (
        <Image src={returnIcon} alt="Return Icon" width={64} height={64} onClick={() => window.history.back()} className='fixed z-50 bottom-4 right-4 hover-scale' />
    );
};
