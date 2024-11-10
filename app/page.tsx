import Image from "next/image";
import Hero from "./hero/page";
import Work from "./work/page";
import Contact from "./contact/page";
import Blog from "./blog/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Work/>
      <Blog/>
      <Contact/>
    </div>
  );
}
