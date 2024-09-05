import {Hero} from "@/components/Hero/Hero"
import Image from "next/image";
import {Solutions} from "@/components/Solutions/Solutions"
export default function Home() {
  console.log("this works here");
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Solutions />
    </main>
  );
}
