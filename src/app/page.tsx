import LoginSocialForm from "@/src/components/LoginSocialForm";
// import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-20">
      <LoginSocialForm/>
      {/* <p className="my-5">Vous n&apos;avez pas encore de compte ?</p>
      <Link href="register" className="backdrop-blur-sm p-3 rounded-lg bg-white/30 underline">S&apos;inscrire</Link> */}
    </main>
  );
}
