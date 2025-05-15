import { PrivyProvider } from "@privy-io/react-auth";

export default function App({ Component, pageProps }: any) {
  return (
    <PrivyProvider
      appId="cmaohyzwc02zkjv0l50tam9xy"
      config={{
        loginMethods: ["wallet"], // Nur Wallet-Login aktivieren
        walletConnectors: {
          ethereum: false,        // MetaMask & Co deaktivieren
          solana: true            // Nur Solana (Phantom) erlauben
        },
        appearance: {
          theme: "light",
        },
        embeddedWallets: {
          createOnLogin: false    // Keine eingebauten Wallets automatisch erstellen
        }
      }}
    >
      <Component {...pageProps} />
    </PrivyProvider>
  );
}
