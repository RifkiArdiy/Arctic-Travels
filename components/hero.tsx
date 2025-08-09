// "use client";
// import { motion } from "motion/react";
// import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

// export function HeroHighlightDemo() {
//     return (
//         <HeroHighlight>
//             <motion.h1
//                 initial={{
//                     opacity: 0,
//                     y: 20,
//                 }}
//                 animate={{
//                     opacity: 1,
//                     y: [20, -5, 0],
//                 }}
//                 transition={{
//                     duration: 0.5,
//                     ease: [0.4, 0.0, 0.2, 1],
//                 }}
//                 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
//             >
//                 With insomnia, nothing&apos;s real. Everything is far away. Everything
//                 is a{" "}
//                 <Highlight className="text-black dark:text-white">
//                     copy, of a copy, of a copy.
//                 </Highlight>
//             </motion.h1>
//         </HeroHighlight>
//     );
// }
import Image from "next/image";
import Skies from "@/public/images/white-skies.jpg";

export function HeroHighlightDemo() {
    return (
        <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
            <div className="relative h-screen w-full">
                <Image
                    src={Skies}
                    alt="Description of image"
                    layout="fill"
                    className="object-cover"
                />
                <div className="relative w-full top-50 flex items-center justify-center">
                    <div className="w-full max-w-5xl mx-auto bg-white/50 rounded-xl shadow border border-white/20">
                        {/* Tabs */}
                        <div className="flex space-x-8 px-6 py-3 border-b border-gray-600 text-sm font-medium text-gray-600">
                            {["Stays", "Flights", "Cars", "Packages", "Things to do"].map((tab, idx) => (
                                <button
                                    key={tab}
                                    className={`pb-2 ${idx === 0
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "hover:text-blue-600"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Form */}
                        <div className="flex flex-wrap items-center gap-3 px-6 py-4">
                            {/* Location */}
                            <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2 flex-1 min-w-[200px]">
                                <span className="mr-2">📍</span>
                                <div>
                                    <label className="text-xs text-gray-500">Where to?</label>
                                    <div className="text-sm font-medium">Indonesia</div>
                                </div>
                            </div>

                            {/* Dates */}
                            <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2 flex-1 min-w-[200px]">
                                <span className="mr-2">📅</span>
                                <div>
                                    <label className="text-xs text-gray-500">Dates</label>
                                    <div className="text-sm font-medium">23 Aug - 25 Aug</div>
                                </div>
                            </div>

                            {/* Travelers */}
                            <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2 flex-1 min-w-[200px]">
                                <span className="mr-2">👤</span>
                                <div>
                                    <label className="text-xs text-gray-500">Travellers</label>
                                    <div className="text-sm font-medium">2 travellers, 1 room</div>
                                </div>
                            </div>

                            {/* Search button */}
                            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full">
                                Search
                            </button>
                        </div>

                        {/* Checkboxes */}
                        <div className="flex items-center gap-6 px-6 pb-4 text-sm text-gray-700">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                Add a flight
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                Add a car
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
