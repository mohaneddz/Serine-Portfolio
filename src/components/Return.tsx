"use client";

import Image from 'next/image';

const returnIcon = '/svgs/misc/return.svg';

export default function Return({className, style}: {className?: string, style?: React.CSSProperties}) {

    function returnToPreviousPage() {
        if (document.referrer && window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    }

    return (
        <Image src={returnIcon} alt="Return Icon" width={64} height={64} onClick={returnToPreviousPage} className={`fixed z-50 bottom-4 right-4 hover-scale ${className}`} style={style} />
    );
};
