import Hero from "@/app/(pages)/hero/page";
// import dynamic from "next/dynamic";

// const Hero = dynamic(() => import("@/components/layouts/hero"))

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
