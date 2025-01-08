// import Hero from "@/components/layouts/hero";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/layouts/hero"))

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
