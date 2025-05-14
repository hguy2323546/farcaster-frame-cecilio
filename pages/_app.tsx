import { PrivyProvider } from "@privy-io/react-auth";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        loginMethods: ["farcaster"],
        appearance: { theme: "light" }
      }}
    >
      <Component {...pageProps} />
    </PrivyProvider>
  );
}
