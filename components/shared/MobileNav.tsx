"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constans";
import { useAuth, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const { isSignedIn } = useAuth();
  const pathName = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        {isSignedIn && (
          <>
            <UserButton />

            <Sheet>
              <SheetTrigger>
                <Image
                  src="/assets/icons/menu.svg"
                  alt="menu"
                  width={32}
                  height={32}
                  className="cursor-pointer"
                />
              </SheetTrigger>
              <SheetContent className="sheet-content sm:w-64">
                <SheetHeader>
                  <SheetTitle className="hidden">Navigation Menu</SheetTitle>
                  <SheetDescription className="hidden">
                    Access all features and transformations
                  </SheetDescription>
                  <Image
                    src="/assets/images/logo-text.svg"
                    alt="logo"
                    width={152}
                    height={23}
                  />
                </SheetHeader>

                  <ul className="header-nav-elements">
                    {navLinks.map((link) => {
                      const isActive = link.route === pathName;

                      return (
                        <li
                          key={link.route}
                          className={`${
                            isActive && "gradient-text"
                          } p-18-semibold flex whitespace-nowrap text-dark-700`}
                        >
                          <Link
                            className="sidebar-link cursor-pointer"
                            href={link.route}
                          >
                            <Image
                              src={link.icon}
                              alt="logo"
                              width={24}
                              height={24}
                            />
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
              </SheetContent>
            </Sheet>
          </>
        )}
      </nav>
    </header>
  );
};

export default MobileNav;
