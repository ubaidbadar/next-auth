import { AppProps } from 'next/app';
import '../styles/index.css';
import { SessionProvider } from 'next-auth/react';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps, ...props }: AppProps) {
  
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
