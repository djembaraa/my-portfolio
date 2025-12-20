"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/button/theme-toggle";

import { CL, NAV_ITEMS } from "../constants/navbar";

function isActivePath(pathname: string, href: string) {
  return pathname === href || (href.startsWith("/#") && pathname === "/");
}

function desktopLinkClass(isActive: boolean) {
  return `${CL.desktopLinkBase} ${
    isActive ? CL.desktopLinkActive : CL.desktopLinkIdle
  }`;
}

function mobileLinkClass(isActive: boolean) {
  return `${CL.mobileLinkBase} ${
    isActive ? CL.mobileLinkActive : CL.mobileLinkIdle
  }`;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(false), [pathname]);

  const onToggleMenu = () => setIsOpen((v) => !v);

  const desktopLinks = useMemo(
    () =>
      NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={desktopLinkClass(isActivePath(pathname, item.href))}
        >
          {item.name}
        </Link>
      )),
    [pathname]
  );

  const mobileLinks = useMemo(
    () =>
      NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={mobileLinkClass(pathname === item.href)}
        >
          {item.name}
        </Link>
      )),
    [pathname]
  );

  const mobilePanelClass = useMemo(
    () =>
      `${CL.mobilePanelBase} ${
        isOpen ? CL.mobilePanelOpen : CL.mobilePanelClosed
      }`,
    [isOpen]
  );

  return (
    <header className={CL.header}>
      <div className={CL.shell}>
        <Link href="/" className={CL.brandLink}>
          <div className={CL.brandAvatar}>
            <Image src="/image/logo.png" alt="Logo" fill className="object-cover" />
          </div>
          <span className={CL.brandText}>Djembar</span>
        </Link>

        <div className={CL.rightWrap}>
          <nav className={CL.desktopNav}>
            {desktopLinks}

            <Link href="/contact" className={CL.contactDesktop}>
              <div className={CL.contactDesktopOverlay} />
              <span className={CL.contactDesktopText}>Contact Me</span>
            </Link>
          </nav>

          <div className={CL.divider} />

          <div className={CL.tools}>
            <ThemeToggle />
            <button
              onClick={onToggleMenu}
              className={CL.burger}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className={mobilePanelClass}>
        <nav className={CL.mobileNav}>
          {mobileLinks}
          <hr className={CL.mobileHr} />
          <Link href="/contact" className={CL.contactMobile}>
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
