import {Hero} from "@/components/Hero/Hero"
import {Services} from "@/components/Services/Services"
import {Solutions} from "@/components/Solutions/Solutions"
import {Plans} from "@/components/Plans/Plans"
export default function Home() {
  console.log("this works here");
  return (
    <main className="w-full overflow-x-hidden text-heading">
      <Hero />
      <Solutions />
      <Services />
      <Plans />
    </main>
  );
}
