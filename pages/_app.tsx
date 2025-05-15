import { PrivyProvider } from "@privy-io/react-auth";

export default function App({ Component, pageProps }: any) {
  return (
    <PrivyProvider
      appId="cmaohyzwc02zkjv0l50tam9xy"
      config={{
        loginMethods: ["wallet"],
        appearance: {
          theme: "light"
        }
      }}
    >
      <Component {...pageProps} />
    </PrivyProvider>
  );
}
