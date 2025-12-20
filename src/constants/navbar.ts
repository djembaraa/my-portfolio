export {}; 

export type NavItem = { name: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Certificates", href: "/certificates" },
];

export const CL = {
  header: "fixed top-4 left-0 right-0 z-50 flex justify-center px-2 sm:px-4",
  shell: `
    flex w-full max-w-5xl items-center justify-between 
    rounded-full 
    border border-white/20 dark:border-neutral-800 
    bg-white/70 dark:bg-neutral-900/60 
    backdrop-blur-xl saturate-150
    shadow-lg shadow-neutral-500/5 dark:shadow-black/50
    px-3 py-2 md:px-6
    transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700
  `,
  brandLink: "flex items-center gap-2 group shrink-0",
  brandAvatar:
    "relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-700 group-hover:scale-105 transition-transform duration-300",
  brandText:
    "font-bold text-base md:text-lg tracking-tight hidden xs:block text-neutral-800 dark:text-white group-hover:text-cyan-500 transition-colors",

  rightWrap: "flex items-center gap-1 sm:gap-2",
  desktopNav: "hidden lg:flex items-center gap-1",

  desktopLinkBase: `
    relative px-4 py-2 
    text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap
    border border-transparent hover:border-cyan-500 hover:text-cyan-500
  `,
  desktopLinkActive: "text-neutral-900 dark:text-cyan-500 font-bold",
  desktopLinkIdle:
    "text-neutral-500 dark:text-neutral-400 hover:text-cyan-500 dark:hover:text-cyan-500",

  contactDesktop: `
    group relative overflow-hidden
    ml-1 px-6 py-2 
    text-sm font-bold rounded-full transition-all duration-300 whitespace-nowrap
    bg-neutral-900 dark:bg-white 
    text-white dark:text-black 
    shadow-md hover:shadow-lg hover:-translate-y-0.5
  `,
  contactDesktopOverlay:
    "absolute inset-0 bg-gradient-to-r from-[#2CA852] to-[#5B369D] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  contactDesktopText:
    "relative z-10 group-hover:text-white transition-colors",

  divider: "h-5 w-px bg-neutral-200 dark:bg-neutral-800 mx-1 hidden lg:block",

  tools: "flex items-center gap-2",
  burger:
    "lg:hidden p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-800 dark:text-white",

  mobilePanelBase: `
    fixed inset-x-4 top-20 p-6 rounded-3xl
    bg-white/90 dark:bg-neutral-900/95 backdrop-blur-2xl
    border border-neutral-200 dark:border-neutral-800
    shadow-2xl transition-all duration-500 ease-in-out transform
    lg:hidden z-[49]
  `,
  mobilePanelOpen: "opacity-100 translate-y-0 scale-100",
  mobilePanelClosed:
    "opacity-0 -translate-y-10 scale-95 pointer-events-none",

  mobileNav: "flex flex-col gap-4",
  mobileLinkBase: "text-lg font-semibold p-2 transition-colors",
  mobileLinkActive: "text-cyan-500",
  mobileLinkIdle: "text-neutral-600 dark:text-neutral-400",

  mobileHr: "border-neutral-200 dark:border-neutral-800 my-2",
  contactMobile:
    "w-full text-center py-4 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-black font-bold shadow-xl active:scale-95 transition-transform",
} as const;
