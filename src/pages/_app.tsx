import '@/styles/globals.css'
import Layout from '../components/Layout';
import type { AppProps } from 'next/app'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init();
  }, [])

  return <Layout title="Portfolio - Loïck LEPREVOST"><Component {...pageProps} /></Layout>
}
