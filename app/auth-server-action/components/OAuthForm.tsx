"use client";
import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";

export default function OAuthForm() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const LoginWithGithub = () => {
	supabase.auth.signInWithOAuth({
		provider: "github",
		options: {
			redirectTo: "http://localhost:3000/auth-server-action/callback",
		}
	})
  };
  return <Button className="w-full" onClick={LoginWithGithub}>Login With Github</Button>;
}
