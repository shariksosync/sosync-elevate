import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { LogoLockup } from "@/components/Logo";
import { useSite } from "@/components/SiteProvider";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { openDemo, settings } = useSite();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass-nav">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" onClick={() => setOpen(false)}>
          <LogoLockup light />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-carbon-foreground/75 transition-colors hover:bg-white/5 hover:text-carbon-foreground"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-white/10 text-carbon-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${settings.phonePrimary.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-carbon-foreground/80 transition-colors hover:text-carbon-foreground"
          >
            <Phone className="h-4 w-4" />
            {settings.phonePrimary}
          </a>
          <Button variant="solar" size="sm" onClick={openDemo}>
            Book ₹1 Demo
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-carbon-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-carbon px-4 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-carbon-foreground/80"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-white/10 text-carbon-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Button
            variant="solar"
            className="mt-4 w-full"
            onClick={() => {
              setOpen(false);
              openDemo();
            }}
          >
            Book ₹1 Demo
          </Button>
        </div>
      )}
    </header>
  );
}
