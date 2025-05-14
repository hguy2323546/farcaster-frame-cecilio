import { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useLoginToFrame } from "@privy-io/react-auth/farcaster";
import frameSdk from "@farcaster/frame-sdk";
import { useRouter } from "next/router";

export default function Home() {
  const { ready, authenticated } = usePrivy();
  const { initLoginToFrame, loginToFrame } = useLoginToFrame();
  const router = useRouter();

  useEffect(() => {
    const login = async () => {
      const { nonce } = await initLoginToFrame();
      const result = await frameSdk.actions.signIn({ nonce });
      await loginToFrame({
        message: result.message,
        signature: result.signature,
      });
    };

    if (ready && !authenticated) {
      login();
    }

    if (ready && authenticated) {
      router.push("https://friedrich-dienstleistungen-mje7xbj5wgsk8gle.builder-preview.com/");
    }
  }, [ready, authenticated]);

  return <p>🔐 Logging in with Farcaster...</p>;
}
