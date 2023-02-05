import '@/styles/globals.css'
import Layout from '../components/Layout.tsx';
import type { AppProps } from 'next/app'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init();
  }, [])

  return <Layout><Component {...pageProps} /></Layout>
}
