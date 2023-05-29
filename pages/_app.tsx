import '@stigg/react-sdk/dist/styles.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {StiggProvider} from "@stigg/react-sdk";

// Using the demo app API key, replace with your own client API key
const STIGG_CLIENT_API_KEY = "$2b$10$ouA6M7FOJSxHH/3mkjZnZOJf5lUmFPvj8G0h1zIQxRkOY9CrpY53.:248ec79b-0932-4157-b514-30375bf5eeb8";

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
