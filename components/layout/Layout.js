import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head';

const Layout = ({children}) => {
  return (
    <>
    <Head>
        <title>Bonzzu Training Courses</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <div>
       {children} 
    </div>
    <Footer />
    </>
  )
}

export default Layout