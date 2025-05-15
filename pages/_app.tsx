import type { AppProps } from 'next/app';
import { PrivyProvider } from '@privy-io/react-auth';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrivyProvider
      appId="cmaohyzwc02zkjv0l50tam9xy"
      config={{
        loginMethods: ['wallet'],
        appearance: {
          theme: 'light',
        },
        externalWallets: {
          solana: {
            connectors: ['phantom'], // Nur Phantom erlauben
          },
          ethereum: {
            connectors: [],
          },
        },
        embeddedWallets: undefined
      }}
    >
      <Component {...pageProps} />
    </PrivyProvider>
  );
}
