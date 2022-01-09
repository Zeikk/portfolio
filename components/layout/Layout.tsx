import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title = 'Portfolio' }: { children: ReactNode, title: string}) => (
  <div style={{ fontFamily: "Poppins"}}>
    <Header title={title}></Header>
    {children}
    <Footer/>
  </div>
)

export default Layout
