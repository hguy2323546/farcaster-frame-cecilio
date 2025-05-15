import { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/router";

export default function Home() {
  const { ready, authenticated, login } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    const tryLogin = async () => {
      await login();
    };

    if (ready && !authenticated) {
      tryLogin();
    }

    if (ready && authenticated) {
      router.push("https://friedrich-dienstleistungen-mje7xbj5wgsk8gle.builder-preview.com/");
    }
  }, [ready, authenticated]);

  return <p>🔐 Logging in with Farcaster...</p>;
}
