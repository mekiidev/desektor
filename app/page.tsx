import {Hero} from "@/components/Hero/Hero"
import {Services} from "@/components/Services/Services"
import {Solutions} from "@/components/Solutions/Solutions"
export default function Home() {
  console.log("this works here");
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Solutions />
      <Services />
    </main>
  );
}
