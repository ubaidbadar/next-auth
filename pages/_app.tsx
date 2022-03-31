import { AppProps } from 'next/app';
import '../styles/index.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps, ...props }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
