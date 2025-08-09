import { NavbarDemo } from "@/components/navbar";
import { HeroHighlightDemo } from "@/components/hero";

export default function Home() {
  return (
    <div className="relative">
      {/* Navbar overlay */}
      <div className="absolute top-5 fixed left-0 w-full z-50">
        <NavbarDemo />
      </div>

      {/* Hero sections */}
      <div className="relative z-0">
        <HeroHighlightDemo />
      </div>
      {/* Main content */}
    </div>
  );
}
