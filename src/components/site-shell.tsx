"use client";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ScrollProgress } from "./scroll-progress";
import { BackToTop } from "./back-to-top";
import { PageTransition } from "./page-transition";
import { useOnline } from "@/hooks/use-online";
import { FiWifiOff } from "react-icons/fi";
export function SiteShell({ children }: { children: React.ReactNode }) { const online = useOnline(); return <><ScrollProgress /><Navbar />{!online && <div className="sticky top-[72px] z-40 flex items-center justify-center gap-2 bg-[#171d32] px-4 py-2 text-xs font-bold text-white"><FiWifiOff /> Offline mode — cached discoveries are still available.</div>}<PageTransition><div>{children}</div></PageTransition><Footer /><BackToTop /></>; }
