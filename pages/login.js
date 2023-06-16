import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
import Footer from '@/components/Footer';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';


const Apply = () => {

    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('https://cors-anywhere.herokuapp.chttps://linktree-ousgvczch-keyuraval.vercel.app/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    toast('You are logged in')
                    localStorage.setItem('LinkTreeToken', data.token)
                    router.push('/dashboard');
                }
                if (data.status === 'not found') {
                    toast('User not found')
                }
            }).catch(err => {
                console.log(err);
            })
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    return (
        <>
            <section className={styles.background + " min-h-screen flex justify-center items-center"}>
                <div className="main">
                    <div className="content bg-white border-2 px-4 py-8 rounded-2xl shadow-lg">
                        <h1 className="text-2xl font-bold text-center">You are among topcreators</h1>
                        <p className='text-center'>Create Linktree for your brand</p>
                        <p className='text-center py-5 font-bold text-gray-500'>Start building your Hub</p>
                        <form onSubmit={handleLogin} className='flex flex-col gap-4 text-lg mt-5'>
                            <input value={email} onChange={e => setEmail(e.target.value)} className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type="email" placeholder="Enter your email" required />
                            <input value={password} onChange={e => setPassword(e.target.value)} className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type="password" placeholder='Enter password' required />

                            <input className='bg-indigo-600 text-white py-2 rounded-lg cursor-pointer' type="submit" value="Apply" />
                        </form>
                    </div>
                    <h4 className='text-center text-white pt-3'>New Here? <Link className='font-bold text-red-400' href='/apply' >SignUp</Link></h4>
                </div>
            </section>
        </>

    )
}

export default Apply