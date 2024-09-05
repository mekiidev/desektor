import {Hero} from "@/components/Hero/Hero"
import Image from "next/image";
import {Solutions} from "@/components/Solutions/Solutions"
export default function Home() {
  console.log("this works here");
  return (
    <main className=" overflow-hidden">
      <Hero />
      <Solutions />
    </main>
  );
}
