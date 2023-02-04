import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Poppins } from '@next/font/google'

const roboto = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
})

const Layout = ({ children, title = 'Portfolio' }: { children: ReactNode, title: string }) => (
    <main className={roboto.className}>
        <Header title={title}></Header>
        {children}
        <Footer />
    </main>

)


export default Layout