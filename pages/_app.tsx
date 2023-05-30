import '@stigg/react-sdk/dist/styles.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {StiggProvider} from "@stigg/react-sdk";

const STIGG_CLIENT_API_KEY = process.env.NEXT_PUBLIC_STIGG_CLIENT_API_KEY || '';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StiggProvider
      theme={{
        layout: {
          planMinWidth: '320px',
          planMaxWidth: '360px'
        }
      }}
      apiKey={STIGG_CLIENT_API_KEY}>
      <Component {...pageProps} />
    </StiggProvider>
  );
}

export default MyApp
