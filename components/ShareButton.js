import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify';

const ShareButton = () => {
    const router = useRouter();

    const copyLink = () => {
        navigator.clipboard.writeText(`http://localhost:3000/${router.query.handle}`);
        toast('Copied to keyboard');

    }
    return (
        <>
            <div className="absolute cursor-pointer top-28 left-10 bg-indigo-200 p-2 rounded-md z-10 shadow md-2 border-2 border" onClick={copyLink}>
                <img className="w-4" src='/svg/share.svg' alt="share button" />
            </div>
        </>
    )
}

export default ShareButton